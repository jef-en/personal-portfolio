const scroll = () => {
  console.log("Scroll function is running!");

  const observer = new IntersectionObserver((entries) => {
    console.log("Entries observed:", entries); // Debugging line
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting:", entry.target); // Debugging line
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  console.log("Hidden elements found:", hiddenElements); // Debugging line
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
};

export default scroll;
