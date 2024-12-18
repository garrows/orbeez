#!/usr/bin/env node

// Get terminal dimensions
const { columns, rows } = process.stdout;

// Define a list of colored circles
const colors = [
    '🔵', // Blue
    '🔴', // Red
    '🟢', // Green
    '🟡', // Yellow
    '🟣', // Purple
    '🔵', // Cyan
    '⚪️', // White
    '⚫️', // Black
    '🟠', // Orange
    '🟤', // Brown (Yellowish for terminal support)
];

// Function to pick a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Generate a single line of random circles
const generateLine = () => {
    const line = Array(columns)
        .fill(null)
        .map(() => getRandomColor())
        .join('')
        .slice(0, columns); // Ensure it fits the terminal width
    return line;
};

// Fill the screen using cursor positioning
const fillScreen = () => {
    console.clear(); // Clear the terminal
    for (let i = 0; i < rows * columns; i++) {
        process.stdout.write(getRandomColor());
    }
    console.log();
};

// Execute the function
fillScreen();
