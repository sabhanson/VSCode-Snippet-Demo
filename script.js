//^ animate.css CDN is needed to make use of this script

const button = document.querySelector(".spin");
const img = document.querySelector(".granny");

const rockOutGranny = () => {
  img.classList.add("animate__animated", "animate__wobble");
  setTimeout(toggleClass, 2000);
};

const toggleClass = () => {
  img.classList.remove("animate__wobble");
};
button.addEventListener("click", rockOutGranny);
