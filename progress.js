document.addEventListener("DOMContentLoaded", function () {
  // Example: Award a badge if the user has set at least 3 goals.
  const badgesContainer = document.getElementById("badgesContainer");
  // You would replace this logic with real progress data.
  const totalGoals = document.querySelectorAll("#goalsList .goal-item").length;
  if (totalGoals >= 3 && badgesContainer) {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = "Milestone Achiever: 3 Goals Set!";
    badgesContainer.appendChild(badge);
  }
});