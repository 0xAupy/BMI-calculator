const form = document.querySelector("form");

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
  }
});
