import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealType } from '../types';
import { getRecipesByMealType } from '../data/recipes';
import { isSameDay } from '../utils/dateUtils';

// Storage keys
const DAILY_RECIPES_KEY = '@daily_recipes';
const DAILY_RECIPES_DATE_KEY = '@daily_recipes_date';

type DailyRecipesMap = Record<MealType, string>; // Maps MealType to Recipe ID

interface DailyRecipeContextType {
    getDailyRecipeId: (mealType: MealType) => string | null;
    isLoading: boolean;
}

const DailyRecipeContext = createContext<DailyRecipeContextType>({
    getDailyRecipeId: () => null,
    isLoading: true,
});

export const useDailyRecipe = () => useContext(DailyRecipeContext);

// Provider component
export const DailyRecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dailyRecipes, setDailyRecipes] = useState<DailyRecipesMap | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadDailyRecipes();
    }, []);

    const loadDailyRecipes = async () => {
        try {
            const storedDate = await AsyncStorage.getItem(DAILY_RECIPES_DATE_KEY);
            const storedRecipes = await AsyncStorage.getItem(DAILY_RECIPES_KEY);
            
            const today = new Date();
            const lastDate = storedDate ? new Date(storedDate) : null;
            
            // If we have stored recipes and it's the same day, load them
            if (lastDate && isSameDay(today, lastDate) && storedRecipes) {
                setDailyRecipes(JSON.parse(storedRecipes));
            } else {
                // Otherwise generate new recipes
                generateAndSaveDailyRecipes(today);
            }
        } catch (error) {
            console.error('Failed to load daily recipes', error);
            // Fallback: generate anyway
            generateAndSaveDailyRecipes(new Date());
        } finally {
            setIsLoading(false);
        }
    };

    const generateAndSaveDailyRecipes = async (date: Date) => {
        const newRecipes: Partial<DailyRecipesMap> = {};
        const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'bread'];
        
        mealTypes.forEach(type => {
            const recipes = getRecipesByMealType(type);
            if (recipes.length > 0) {
                // Pick a random recipe
                const randomIndex = Math.floor(Math.random() * recipes.length);
                newRecipes[type] = recipes[randomIndex].id;
            }
        });

        const recipesToSave = newRecipes as DailyRecipesMap;
        setDailyRecipes(recipesToSave);

        try {
            await AsyncStorage.setItem(DAILY_RECIPES_DATE_KEY, date.toISOString());
            await AsyncStorage.setItem(DAILY_RECIPES_KEY, JSON.stringify(recipesToSave));
        } catch (error) {
            console.error('Failed to save daily recipes', error);
        }
    };

    const getDailyRecipeId = (mealType: MealType): string | null => {
        if (!dailyRecipes) return null;
        return dailyRecipes[mealType] || null;
    };

    return (
        <DailyRecipeContext.Provider value={{ getDailyRecipeId, isLoading }}>
            {children}
        </DailyRecipeContext.Provider>
    );
};
