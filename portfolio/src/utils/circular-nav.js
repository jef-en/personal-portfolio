const circularNav = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      "matching.html",
      "pawhub.html",
      "abel.html",
      "shift-travel.html",
      "go-jeep.html",
    ];

    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage) currentPage = "index.html";

    let currentIndex = projects.indexOf(currentPage);
    if (currentIndex === -1) currentIndex = 0;

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % projects.length;
        window.location.href = projects[currentIndex];
      });
    }
  });
};

export default circularNav();
