const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
}

updateThemeToggle();

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";

  if (nextTheme === "dark") {
    document.body.dataset.theme = "dark";
  } else {
    delete document.body.dataset.theme; // Go back to default light theme
  }

  localStorage.setItem("theme", nextTheme); // Save new choice to local storage
  updateThemeToggle();
});

function updateThemeToggle() {
  if (!themeToggle) {
    return;
  }

  const isDark = document.body.dataset.theme === "dark";
  
  // Updates toggle button accordingly
  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}