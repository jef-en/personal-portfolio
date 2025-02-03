const loadSlide = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const introSections = document.querySelectorAll(".slide_up");

    introSections.forEach((section) => {
      section.classList.add("slide_up_active");
    });
  });
};

export default loadSlide;
