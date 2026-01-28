/**
 * Utility functions for formatting values in the Vegan Daily app
 */

/**
 * Converts a decimal number to a fraction string if possible.
 * Handles common cooking fractions like 1/2, 1/4, 1/3, 2/3, 3/4.
 */
export const formatAmount = (amount: number): string => {
    if (Number.isInteger(amount)) {
        return amount.toString();
    }

    // Get greatest common divisor
    const gcd = (a: number, b: number): number => {
        return b ? gcd(b, a % b) : a;
    };

    // For small decimals, try to find a fraction
    // This is a simple implementation for common kitchen measurements
    const tolerance = 0.01;
    const commonFractions = [
        { dec: 0.25, frac: '1/4' },
        { dec: 0.33, frac: '1/3' },
        { dec: 0.5, frac: '1/2' },
        { dec: 0.66, frac: '2/3' },
        { dec: 0.75, frac: '3/4' },
        { dec: 0.125, frac: '1/8' },
    ];

    const fractionalPart = amount % 1;
    const integerPart = Math.floor(amount);

    for (const f of commonFractions) {
        if (Math.abs(fractionalPart - f.dec) < tolerance) {
            return integerPart > 0 ? `${integerPart} ${f.frac}` : f.frac;
        }
    }

    // Fallback to decimal if not a common fraction
    return amount.toString();
};
