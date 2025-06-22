document.addEventListener("DOMContentLoaded", function () {
  /* --- Navigation Hamburger Toggle --- */
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  /* --- Setup Modal & User Preferences --- */
  const setupModal = document.getElementById("setupModal");
  const setupSubmit = document.getElementById("setupSubmit");
  const likesInput = document.getElementById("likes");
  const dislikesInput = document.getElementById("dislikes");

  // Check if preferences have been submitted already
  if (localStorage.getItem("preferencesSubmitted")) {
    setupModal.style.display = "none";
  } else {
    setupModal.style.display = "flex";
  }
setupSubmit.addEventListener("click", function () {
  // ... code that hides the modal and stores preferences
});
  setupSubmit.addEventListener("click", function () {
    const likes = likesInput.value.trim();
    const dislikes = dislikesInput.value.trim();

    // Save preferences in localStorage (simulate user customization)
    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);
    localStorage.setItem("preferencesSubmitted", true);
    setupModal.style.display = "none";
    updateAIResponse("Great! I'll tailor my suggestions based on your preferences.");
  });

  /* --- Quick Task Planner Functionality --- */
  const quickTaskInput = document.getElementById("quickTaskInput");
  const addQuickTaskButton = document.getElementById("addQuickTaskButton");
  const quickTaskResult = document.getElementById("quickTaskResult");

  addQuickTaskButton.addEventListener("click", function () {
    const query = quickTaskInput.value.trim();
    if (query !== "") {
      // Simulate a route planning response
      const resultText =
        "Based on your input, here's the best route: Take bus 42 to Main St., then walk 10 minutes.";
      quickTaskResult.innerHTML = `<p>${resultText}</p>`;
      updateAIResponse("Awesome choice! I've found the quickest route for you.");
      quickTaskInput.value = "";
    }
  });

  /* --- Smart Scheduler Functionality --- */
  let schedulerTasks = [];
  const schedulerTaskInput = document.getElementById("schedulerTaskInput");
  const addSchedulerTaskButton = document.getElementById("addSchedulerTaskButton");
  const calendarView = document.getElementById("calendarView");
  const priorityListElement = document.querySelector(".priority-list ul");

  // Generate a simple calendar view (simulate 30 days)
  function generateCalendar() {
    calendarView.innerHTML = "";
    for (let day = 1; day <= 30; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "calendar-day";
      dayDiv.innerHTML = `<strong>Day ${day}</strong><div class="day-tasks" id="day-${day}"></div>`;
      calendarView.appendChild(dayDiv);
    }
  }
  generateCalendar();

  // Update calendar view with scheduled tasks
  function updateCalendar() {
    // Clear previous tasks in each day first
    for (let day = 1; day <= 30; day++) {
      const dayContainer = document.getElementById(`day-${day}`);
      if (dayContainer) {
        dayContainer.innerHTML = "";
      }
    }
    // Append each task to its assigned day
    schedulerTasks.forEach((task) => {
      const dayContainer = document.getElementById(`day-${task.day}`);
      if (dayContainer) {
        const taskEl = document.createElement("div");
        taskEl.className = "task-item";
        taskEl.textContent = task.text;
        dayContainer.appendChild(taskEl);
      }
    });
  }

  // Update Priority List based on simple keyword filtering
  function updatePriorityList() {
    priorityListElement.innerHTML = "";
    let priorityGroups = { High: [], Medium: [], Low: [] };

    schedulerTasks.forEach((task) => {
      const taskTextLower = task.text.toLowerCase();
      if (taskTextLower.includes("work") || taskTextLower.includes("meeting")) {
        priorityGroups.High.push(task);
      } else if (taskTextLower.includes("gym")) {
        priorityGroups.Medium.push(task);
      } else {
        priorityGroups.Low.push(task);
      }
    });

    for (let level in priorityGroups) {
      if (priorityGroups[level].length > 0) {
        const header = document.createElement("li");
        header.style.fontWeight = "600";
        header.textContent = `${level} Priority:`;
        priorityListElement.appendChild(header);

        priorityGroups[level].forEach((task) => {
          const li = document.createElement("li");
          li.textContent = `${task.text} (Day ${task.day})`;
          priorityListElement.appendChild(li);
        });
      }
    }
  }

  addSchedulerTaskButton.addEventListener("click", function () {
    const taskText = schedulerTaskInput.value.trim();
    if (taskText !== "") {
      // Randomly assign a day between 1 and 30 for demonstration purposes
      const assignedDay = Math.floor(Math.random() * 30) + 1;
      const newTask = { text: taskText, day: assignedDay };
      schedulerTasks.push(newTask);
      schedulerTaskInput.value = "";
      updateCalendar();
      updatePriorityList();
      updateAIResponse(`Added task "${taskText}" to Day ${assignedDay}. Stay organized and keep rocking your day!`);
    }
  });

  /* --- AI Chat/Suggestions Functionality --- */
  function updateAIResponse(message) {
    const aiFeedback = document.getElementById("aiFeedback");
    // Fade-out effect before showing new message
    aiFeedback.style.opacity = 0;
    setTimeout(() => {
      aiFeedback.innerHTML = `<p>${message}</p>`;
      aiFeedback.style.opacity = 1;
    }, 300);
  }
});
window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  }, 2500); // delay matches the fadeOut animation
setupModal.style.display = "none";
});
