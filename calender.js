document.addEventListener("DOMContentLoaded", function () {
  const calendarSyncButton = document.getElementById("calendarSyncButton");
  const calendarSyncStatus = document.getElementById("calendarSyncStatus");

  if (calendarSyncButton) {
    calendarSyncButton.addEventListener("click", function () {
      // Placeholder code: In a full implementation, you would trigger Google OAuth flow here.
      calendarSyncStatus.innerHTML = "<p>Attempting to sync with Google Calendar...</p>";

      // Simulate a delay and success message.
      setTimeout(function () {
        // This is where you would normally handle the API callback.
        calendarSyncStatus.innerHTML = "<p>Google Calendar synced successfully!</p>";
      }, 2000);
    });
  }
});