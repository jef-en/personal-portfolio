const cardSlide = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const workCards = document.querySelectorAll(".card_slide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    workCards.forEach((card) => observer.observe(card));
  });
};

export default cardSlide;
