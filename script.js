const body = document.querySelector("body");

const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const random = document.querySelector("#random");

function randomColor () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color = `rgb(${red}, ${green}, ${blue})`; 
  return color;
};

green.addEventListener("click", () => {
  body.style.backgroundColor = "green"; 
})

red.addEventListener("click", () => {
  body.style.backgroundColor = "red"; 
})

blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue"; 
})

random.addEventListener("click", () => {
  body.style.backgroundColor = randomColor();
});





