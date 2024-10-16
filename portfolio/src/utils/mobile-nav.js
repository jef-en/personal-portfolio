const mobileNav = () => {
  const headerBars = document.querySelector(".header_bars");
  const mobileNav = document.querySelector(".mobile_nav");
  let isMobileNavOpen = false;

  headerBars.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
};

export default mobileNav;
