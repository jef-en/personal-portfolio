const loadSlide = () => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!"); // Debugging line

    const introSections = document.querySelectorAll(".slide_up");

    if (introSections.length === 0) {
      console.log("Elements with class .slide_up not found!");
      return;
    }

    console.log("Adding animation to elements...");

    introSections.forEach((section) => {
      section.classList.add("slide_up_active");
    });
  });
};

export default loadSlide;
