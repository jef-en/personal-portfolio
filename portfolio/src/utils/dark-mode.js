const darkMode = () => {
  const themeToggleButton = document.querySelectorAll("#theme-toggle");

  const theme = localStorage.getItem("theme");

  theme && document.body.classList.add(theme);

  themeToggleButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        btn.textContent = "dark.";
        localStorage.setItem("theme", "light-mode");
      } else {
        btn.textContent = "light.";
        localStorage.removeItem("theme");
        document.body.removeAttribute("class");
      }
    });
  });
};

export default darkMode;
