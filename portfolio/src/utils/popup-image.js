const popUp = () => {
  document.querySelectorAll(".pawhub img").forEach((image) => {
    image.onclick = () => {
      document.querySelector(".popup_image").style.display = "block";
      document.querySelector(".popup_image img").src =
        image.getAttribute("src");
    };
  });

  document.querySelector(".popup_image span").onclick = () => {
    document.querySelector(".popup_image").style.display = "none";
  };
};

export default popUp;
