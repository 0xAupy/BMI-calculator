const form = document.querySelector("form");
const themeSwitch = document.getElementById("theme-switch");
const html = document.documentElement;

// Apply theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
    themeSwitch.checked = true;
  }
});

// Handle theme toggle
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Fixed missing parentheses

  // Get the values after user submits them
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Display result with categorization
    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal weight";
    } else {
      category = "Overweight";
    }
    
    results.innerHTML = `<span>${bmi}</span><p>Category: ${category}</p>`;
    
    // Apply category-specific styling to the BMI value
    const bmiValue = results.querySelector("span");
    
    if (bmi < 18.6) {
      bmiValue.style.color = getComputedStyle(document.documentElement).getPropertyValue('--underweight-color');
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiValue.style.color = getComputedStyle(document.documentElement).getPropertyValue('--normal-color');
    } else {
      bmiValue.style.color = getComputedStyle(document.documentElement).getPropertyValue('--overweight-color');
    }
  }
});