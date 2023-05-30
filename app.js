const leftNavBtn = document.querySelector("#left");
const rightNavBtn = document.querySelector("#right");
const testimonialsContent = document.querySelector(".testimonials-content");

leftNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  testimonialsContent.scrollLeft = 0;
  console.log("left");
});

rightNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  testimonialsContent.scrollLeft = window.innerWidth; // just set px value to greater than the max scrollLeft value - I arbitrarily chose the innerWidth
  console.log("right", testimonialsContent.attributes);
});
