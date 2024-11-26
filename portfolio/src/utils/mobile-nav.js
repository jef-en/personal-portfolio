const mobileNav = () => {
  const headerBars = document.querySelector(".header_bars");
  const mobileNav = document.querySelector(".mobile_nav");
  const headerTitle = document.querySelector(".header_title");
  const mobileLinks = document.querySelectorAll(".mobile_link");
  let isMobileNavOpen = false;

  headerBars.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
      headerTitle.classList.add("hidden");
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
      headerTitle.classList.remove("hidden");
    }
  });
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
      headerTitle.classList.remove("hidden");
    });
  });
};

export default mobileNav;
