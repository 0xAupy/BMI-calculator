# BMI Calculator

## Overview
This is a simple web-based BMI (Body Mass Index) Calculator that allows users to input their height and weight to determine their BMI category. The application provides an intuitive interface and categorizes BMI results into Underweight, Normal weight, or Overweight.

**Visit the website at : [BMI Calculator](https://0xaupy.github.io/BMI-calculator/)**

## Features
- User-friendly interface with a responsive design.
- Input validation for height and weight.
- Calculates BMI based on user input.
- Displays BMI results with corresponding category.
- Provides a BMI weight guide.

## Technologies Used
- HTML
- CSS
- JavaScript
- Google Fonts (Roboto)

## Installation & Usage
1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Enter your height (in cm) and weight (in kg) into the input fields.
4. Click the "Calculate" button to get your BMI result and category.

## File Structure
- `index.html` - Main HTML structure.
- `style.css` - Styling for the calculator.
- `script.js` - JavaScript logic for BMI calculation and theme toggling.

## How It Works
1. The user enters their height and weight.
2. The BMI is calculated using the formula:
   ```
   BMI = weight / (height * height) * 10000
   ```
3. The calculated BMI is displayed along with its category:
   - **Underweight:** BMI < 18.6
   - **Normal:** BMI 18.6 - 24.9
   - **Overweight:** BMI > 24.9

