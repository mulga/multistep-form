const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentSteps();
}

multiStepForm.addEventListener("click", (e) => {
  let incrementer;
  if (e.target.matches("[data-next]")) {
    incrementer = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementer = -1;
  }

  if (incrementer == null) return;
  const inputs = [...formSteps[currentStep].querySelectorAll("input")];
  const allValid = inputs.every((input) => input.checkValidity());

  if (allValid) {
    currentStep += incrementer;
    showCurrentSteps();
  }

  //   console.log(currentStep);
});

function showCurrentSteps() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}
