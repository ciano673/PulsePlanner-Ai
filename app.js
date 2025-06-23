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
    document.addEventListener("DOMContentLoaded", function () {
  // Existing code...

  // Dark/Light Mode Toggle
  const themeButton = document.getElementById("toggleThemeButton");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      // Optionally, store the preference in localStorage for persistence
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      // Onboarding Modal Logic
const onboardingModal = document.getElementById("onboardingModal");
const closeOnboarding = document.getElementById("closeOnboarding");

if (onboardingModal && closeOnboarding && !localStorage.getItem("onboarded")) {
  onboardingModal.style.display = "flex";
  closeOnboarding.addEventListener("click", function () {
    onboardingModal.style.display = "none";
    localStorage.setItem("onboarded", true);
  });
} else if (onboardingModal) {
  onboardingModal.style.display = "none";
}
    });

    // On page load, check localStorage for theme preference
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
    }
  }
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
      // Quick Planner Logic in app.js
document.addEventListener("DOMContentLoaded", function () {
  const quickTaskInput = document.getElementById("quickTaskInput");
  const addQuickTaskButton = document.getElementById("addQuickTaskButton");
  const quickTaskResult = document.getElementById("quickTaskResult");

  if (addQuickTaskButton) {
    addQuickTaskButton.addEventListener("click", function () {
      const query = quickTaskInput.value.trim();
      if (query) {
        // Simple simulated map integration:
        // Expecting a format like: "Plan route from Home to Office"
        if (query.toLowerCase().includes("from") && query.toLowerCase().includes("to")) {
          let parts = query.split(/from|to/i);
          let startLocation = parts[1] ? parts[1].trim() : "unknown";
          let endLocation = parts[2] ? parts[2].trim() : "unknown";
          // Simulated function to get transit time (placeholder for API call)
          let transitTime = getTransitTime(startLocation, endLocation);
          quickTaskResult.innerHTML = `<p>Route from ${startLocation} to ${endLocation}: Estimated transit time is ${transitTime}.</p>`;
        } else {
          quickTaskResult.innerHTML = `<p>Please format your query as "Plan route from [Start] to [Destination]".</p>`;
        }
        quickTaskInput.value = "";
  // Simulated maps integration function (to be replaced with actual API integration later)
  function getTransitTime(start, end) {
    // For demonstration purposes, return a random time between 10-30 minutes.
    const time = Math.floor(Math.random() * 21) + 10;
    return `${time} minutes`;
    }
  });
}

  // Further global functions (e.g., AI personality updates) can be added here.
});