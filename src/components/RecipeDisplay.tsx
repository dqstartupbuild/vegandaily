import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { theme } from '../theme';
import { Recipe } from '../types';
import { formatAmount } from '../utils/formatAmount';
import { ServingsAdjuster } from './ServingsAdjuster';

interface RecipeDisplayProps {
  recipe: Recipe;
}

/**
 * Full recipe display component with ingredients and instructions
 */
export const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings);

  // Calculate the multiplier for ingredient amounts
  const servingsMultiplier = servings / recipe.servings;

  const handleIncrease = () => setServings((s) => Math.min(s + 1, 20));
  const handleDecrease = () => setServings((s) => Math.max(s - 1, 1));

  // Calculate adjusted ingredient amount
  const getAdjustedAmount = (originalAmount: number): number => {
    return originalAmount * servingsMultiplier;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Recipe Image */}
      {recipe.image && (
        <Image source={recipe.image} style={styles.heroImage} resizeMode="cover" />
      )}

      {/* Recipe Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        {/* Time and Servings Info */}
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Text style={styles.metaEmoji}>⏱️</Text>
            <Text style={styles.metaLabel}>Prep</Text>
            <Text style={styles.metaValue}>{recipe.prepTime} min</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaEmoji}>🍳</Text>
            <Text style={styles.metaLabel}>Cook</Text>
            <Text style={styles.metaValue}>{recipe.cookTime} min</Text>
          </View>
        </View>
      </View>

      {/* Servings Adjuster */}
      <View style={styles.servingsSection}>
        <ServingsAdjuster
          currentServings={servings}
          originalServings={recipe.servings}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </View>

      {/* Ingredients Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🥕 Ingredients</Text>
        <View style={styles.ingredientsList}>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.ingredientBullet}>•</Text>
              <Text style={styles.ingredientText}>
                <Text style={styles.ingredientAmount}>
                  {formatAmount(getAdjustedAmount(ingredient.amount))} {ingredient.unit}
                </Text>{' '}
                {ingredient.name}
                {ingredient.optional && (
                  <Text style={styles.optionalLabel}> (optional)</Text>
                )}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Instructions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Instructions</Text>
        <View style={styles.instructionsList}>
          {recipe.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Nutrition Info (if available) */}
      {recipe.nutritionPerServing && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Nutrition per Serving</Text>
          <View style={styles.nutritionGrid}>
            <NutritionItem label="Calories" value={recipe.nutritionPerServing.calories} unit="kcal" />
            <NutritionItem label="Protein" value={recipe.nutritionPerServing.protein} unit="g" />
            <NutritionItem label="Carbs" value={recipe.nutritionPerServing.carbs} unit="g" />
            <NutritionItem label="Fat" value={recipe.nutritionPerServing.fat} unit="g" />
          </View>
        </View>
      )}

      {/* Tags */}
      {recipe.tags.length > 0 && (
        <View style={styles.tagsContainer}>
          {recipe.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      )}

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

// Nutrition item helper component
const NutritionItem: React.FC<{ label: string; value: number; unit: string }> = ({
  label,
  value,
  unit,
}) => (
  <View style={styles.nutritionItem}>
    <Text style={styles.nutritionValue}>
      {value}
      <Text style={styles.nutritionUnit}>{unit}</Text>
    </Text>
    <Text style={styles.nutritionLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  header: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  description: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
    lineHeight: 24,
    marginBottom: theme.spacing.md,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.surfaceElevated,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
  },
  metaItem: { alignItems: 'center' },
  metaEmoji: { fontSize: 24, marginBottom: theme.spacing.xs },
  metaLabel: { fontSize: theme.typography.sizes.sm, color: theme.colors.textLight },
  metaValue: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text,
  },
  servingsSection: {
    padding: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },
  section: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.sm,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  ingredientsList: { gap: theme.spacing.sm },
  ingredientItem: { flexDirection: 'row', alignItems: 'flex-start' },
  ingredientBullet: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
    fontWeight: theme.typography.weights.bold,
  },
  ingredientText: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text,
    lineHeight: 22,
  },
  ingredientAmount: { fontWeight: theme.typography.weights.semibold },
  optionalLabel: { color: theme.colors.textLight, fontStyle: 'italic' },
  instructionsList: { gap: theme.spacing.md },
  instructionItem: { flexDirection: 'row', alignItems: 'flex-start' },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  stepNumberText: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textOnPrimary,
  },
  instructionText: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
  nutritionGrid: { flexDirection: 'row', justifyContent: 'space-around' },
  nutritionItem: { alignItems: 'center' },
  nutritionValue: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.primary,
  },
  nutritionUnit: { fontSize: theme.typography.sizes.sm, fontWeight: theme.typography.weights.regular },
  nutritionLabel: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  tag: {
    backgroundColor: theme.colors.surfaceElevated,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
  },
  tagText: { fontSize: theme.typography.sizes.sm, color: theme.colors.textSecondary },
  bottomPadding: { height: theme.spacing.xl },
});
