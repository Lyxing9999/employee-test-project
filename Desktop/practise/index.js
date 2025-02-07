// input element from HTML //
const inputName = document.getElementById("inputName");
const inputPosition = document.getElementById("inputPosition");
const inputID = document.getElementById("inputID");
const inputSalary = document.getElementById("inputSalary");
//Button element //
const buttonEnter = document.getElementById("button-enter");
//Display element //
const jsDisplay = document.getElementById("js-display");
// Select error message display element
const errorMessage = document.getElementById("error-message");

// function calculate TAX //
function calculateTax(salary) {
  if (salary <= 250) return 0;
  if (salary <= 500) return salary * 0.05; // 5% tax for 251-500
  if (salary <= 1000) return salary * 0.1; // 10% tax for 501-1000
  if (salary <= 2000) return salary * 0.15; // 15% tax for 1001-2000
  return salary * 0.2; // 20% tax for above 2000
}
// Event listener for button click
buttonEnter.addEventListener("click", () => {
  const name = inputName.value.trim();
  const position = inputPosition.value.trim();
  const id = Number(inputID.value.trim());
  const salary = Number(inputSalary.value.trim());

  // Validate inputs
  if (
    !name ||
    !position ||
    isNaN(id) ||
    id <= 0 ||
    !Number.isInteger(id) ||
    isNaN(salary) ||
    salary <= 0
  ) {
    errorMessage.textContent =
      "Please fill all fields correctly. ID must be a positive number.";
    return;
  }
  // Check if salary exceeds 1,000,000
  if (salary > 1000000) {
    errorMessage.textContent = "Salary cannot exceed 1,000,000";
    return;
  }
  // Clear error message when inputs are valid
  errorMessage.textContent = "";

  // Create list item
  const tax = calculateTax(salary);
  const netSalary = salary - tax;
  const li = document.createElement("li");
  li.textContent = `Name: ${name}\n Position: ${position}\n ID: ${id}\n Salary: ${salary.toFixed(
    2
  )}$\n Tax: ${tax.toFixed(2)}$\n Net-Salary: ${netSalary.toFixed(2)}$`;
  li.style.whiteSpace = "pre-line"; // Keep line breaks in display

  jsDisplay.appendChild(li);

  // Clear input fields after entry
  inputName.value = "";
  inputPosition.value = "";
  inputID.value = "";
  inputSalary.value = "";
});

// Debugging console log
console.log(
  inputName,
  inputPosition,
  inputID,
  inputSalary,
  buttonEnter,
  jsDisplay
);
