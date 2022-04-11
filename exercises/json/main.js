let sleeps = [
  {name: "Thursday", amount: 7.5},
  {name: "Friday", amount: 9},
  {name: "Saturday", amount: 8},
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
let container = document.querySelector(".bedroom");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displaySleeps(sleep) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let sleepDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("sleep");
  // adds a specific class to each new div
  newItem.classList.add("sleep" + [i]);
  // places the flower name and amount to the div
  sleepDiv.innerHTML = sleep.name + " – " + sleep.amount;
  // sets height of flower to the amount. try changing height to width, or padding
  sleepDiv.style.width = sleep.amount * 50 + "px";
  console.log(sleep);
}
// loops through the flowers and runs the displayFlowers function for each one
sleeps.forEach(displaySleeps);