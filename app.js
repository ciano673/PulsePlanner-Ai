document.addEventListener("DOMContentLoaded", function () {
  // Global Example: Basic navigation toggle for mobile devices (if needed)
  // (You could expand this based on your design)
  // For example, toggling a mobile menu:
  const navMenu = document.querySelector("nav ul");
  document.querySelector(".header-container").addEventListener("click", function () {
    // This is just a placeholder for any global event handling.
    // You could add show/hide logic if you implement a mobile hamburger menu.
document.addEventListener("DOMContentLoaded", function () {
  // Existing global functions ...

  // AI Welcome Message for first-time visitors
  if (!localStorage.getItem("visited")) {
    const aiWelcome = document.getElementById("aiWelcome");
    if (aiWelcome) {
      aiWelcome.innerHTML = "<p>Hey there! Ready to elevate your planning experience?</p>";
    }
    localStorage.setItem("visited", true);
  }
});
  });

  // Global: Example for saving preferences from any page using localStorage.
  const preferencesForm = document.getElementById("preferencesForm");
  if (preferencesForm) {
    preferencesForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const likes = document.getElementById("likes").value.trim();
      const dislikes = document.getElementById("dislikes").value.trim();

      localStorage.setItem("likes", likes);
      localStorage.setItem("dislikes", dislikes);
      alert("Preferences saved!");
    });
  }

  // Global: Hide any loading overlays once the page is ready (if implemented)
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 2500);
  }
  const quickTaskInput = document.getElementById("quickTaskInput");
const addQuickTaskButton = document.getElementById("addQuickTaskButton");
const quickTaskResult = document.getElementById("quickTaskResult");

if (addQuickTaskButton) {
  addQuickTaskButton.addEventListener("click", function () {
    const query = quickTaskInput.value.trim();
    if (query) {
      quickTaskResult.innerHTML = `<p>Planning route for: ${query}</p>`;
    }
  });
}

  // Further global functions (e.g., AI personality updates) can be added here.
});