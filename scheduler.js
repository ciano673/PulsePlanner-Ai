document.addEventListener("DOMContentLoaded", function () {
  const schedulerButton = document.getElementById("addSchedulerTaskButton");
  const schedulerInput = document.getElementById("schedulerTaskInput");
  const schedulerOutput = document.getElementById("schedulerOutput");
  const priorityList = document.querySelector("#priorityList ul");

  if (schedulerButton && schedulerInput && schedulerOutput) {
    schedulerButton.addEventListener("click", function () {
      const inputText = schedulerInput.value.trim();
      if (!inputText) return;

      // Basic parsing for recurring tasks (example: "Work Monday-Friday 9-5")
      let recurringPattern = /(.+)\s(Monday-Friday)\s([\d\-]+)/i;
      let match = recurringPattern.exec(inputText);
      let outputHTML = "";

      if (match) {
        let taskName = match[1];
        let days = match[2]; // for a full implementation you would break this out
        let timeRange = match[3];
        // For example, populate 4 weeks; here just demo output:
        for (let week = 1; week <= 4; week++) {
          outputHTML += `<p>Week ${week}: ${taskName} on ${days} at ${timeRange}</p>`;
        }
      } else {
        // Fallback if no recurring pattern is found.
        outputHTML = `<p>Task added: ${inputText}</p>`;
      }

      schedulerOutput.innerHTML = outputHTML;
      schedulerInput.value = "";

      // Optionally update a simple priority list (here just appending a demo task)
      let li = document.createElement("li");
      li.textContent = inputText;
      priorityList.appendChild(li);
    });
  }
});