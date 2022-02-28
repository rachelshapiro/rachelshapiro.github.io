let water = document.querySelector(".cls-2");

function fillGlass () {
  // body.classList.toggle("water");
  water.classList.toggle("hide");
}

let glass = document.querySelector("#glass");
glass.addEventListener("click", fillGlass);