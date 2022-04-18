// keep this viewable for all examples. These are JavaScript objects
let screenTime = [
  {
    day: "April 7", 
    pickups: 158, 
    notifications: 305,
    topAppsUsed: "Tik Tok (2hr 16 min), Messages (1hr), Mail(35 min)"
  },
  {
    day: "April 8", 
    pickups:195, 
    notifications: 266,
    topAppsUsed: "Tik Tok (1hr 35 min), Instagram (1hr 21 min), Messages(35 min)"
  },
  {
    day: "April 9", 
    pickups: 237, 
    notifications: 298,
    topAppsUsed: "Tik Tok (1hr 11 min), Messages (1hr 9min), Instagram (42 min)"
  },
  {
    day: "April 10", 
    pickups: 138, 
    notifications: 215,
    topAppsUsed: "Tik Tok (1hr 42 min), Instagram (1hr 36 min), Messages(37 min)"
  },
  {
    day: "April 11", 
    pickups: 134, 
    notifications: 239,
    epTwoTitle: "Instagram (1hr 1 min), Tik Tok (58min), Messages(41 min)"
  },
  {
    day: "April 12", 
    pickups: 134, 
    notifications: 239,
    topAppsUsed: "Tik Tok (2hr 15 min), Instagram (54 min), Messages(49 min)"
  }
];

// Example 1: Displays one of the contents into the html

// let container = document.querySelector(".teen-show-container");
// container.innerHTML = teenDramas[0].name + ", " + teenDramas[0].year + ", " + teenDramas[0].epTwoTitle;

// Example 2: Displays all the contents into the html
let container = document.querySelector(".screen-time-container");

function displaySTime(day) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let dayDiv = container.appendChild(newItem);
  // adds a class to each new div
  newItem.classList.add("day");
  // places the show name to the div
  dayDiv.innerHTML = day.date;
  console.log(day);
}
// loops through the teen dramas and runs the displayTDramas function for each one
screenTime.forEach(displaySTime);


// Example 3: Same as above, but show the show name, year, and episode title but styled uniquely
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) {
//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   let showDiv = container.appendChild(newItem);


//   // adds a class to each new div
//   newItem.classList.add("show");
//   // places the show name to the div
//   showDiv.innerHTML = show.name;


// // Same process as above to add the show year, needs to go here so that it doesnt get overridden
//   let newYearItem = document.createElement("div");
//   let yearDiv = showDiv.appendChild(newYearItem);

//   newYearItem.classList.add("year");
//   yearDiv.innerHTML = show.year;
// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// Example 4: Same as above, no year, but add a hover on each show and see the name of the second episode
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) {
//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   let showDiv = container.appendChild(newItem);


//   // adds a class to each new div
//   newItem.classList.add("show");
//   // places the show name to the div
//   showDiv.innerHTML = show.name;

// // create a function that will replace the HTML of the show div with the episode title
// function displayEpTitle() {
//   showDiv.innerHTML = show.epTwoTitle;
// }
// // here Im adding back the show name.
// function revertShow() {
//   showDiv.innerHTML = show.name;
// }

// // add an eventlistener for both the mouseover and mouseleave events
// showDiv.addEventListener("mouseover", displayEpTitle);
// showDiv.addEventListener("mouseleave", revertShow);

// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// Example 5 Add a button to sort the shows by year, will need more polishing...

// let container = document.querySelector(".teen-show-container");
// function displayTDramas(show) {
//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   let showDiv = container.appendChild(newItem);


//   // adds a class to each new div
//   newItem.classList.add("show");
//   // places the show name to the div
//   showDiv.innerHTML = show.name;


// // Same process as above to add the show year, needs to go here so that it doesnt get overridden
//   let newYearItem = document.createElement("div");
//   let yearDiv = showDiv.appendChild(newYearItem);

// // create a function that will replace the HTML of the show div with the episode title
// function displayEpTitle() {
//   showDiv.innerHTML = show.year;
// }
// // here Im adding back the show name. I could add the year back, too, but I chose not to
// function revertShow() {
//   showDiv.innerHTML = show.name;
// }

// // add an eventlistener for both the mouseover and mouseleave events
// showDiv.addEventListener("mouseover", displayEpTitle);
// showDiv.addEventListener("mouseleave", revertShow);

// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// // New edits: Add an event listener to the button
// let button = document.querySelector(".year-button");

// function sortDramas() {
//   teenDramas.sort(function(a, b) {
//     console.log(a, b);
//     return a.year - b.year;
//   });

//   console.log(teenDramas);
//   // re-insert teenDramas in new order
//   container.innerHTML = '';
//   teenDramas.forEach(displayTDramas);
// }

// button.addEventListener("click", sortDramas);



// Example 6, same as above but toggle button on and off
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) {
//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   let showDiv = container.appendChild(newItem);


//   // adds a class to each new div
//   newItem.classList.add("show");
//   // places the show name to the div
//   showDiv.innerHTML = show.name;


//   // Same process as above to add the show year, needs to go here so that it doesnt get overridden
//   let newYearItem = document.createElement("div");
//   let yearDiv = showDiv.appendChild(newYearItem);

//   // create a function that will replace the HTML of the show div with the episode title
//   function displayEpTitle() {
//     showDiv.innerHTML = show.year;
//   }
//   // here Im adding back the show name. I could add the year back, too, but I chose not to
//   function revertShow() {
//     showDiv.innerHTML = show.name;
//   }

//   // add an eventlistener for both the mouseover and mouseleave events
//   showDiv.addEventListener("mouseover", displayEpTitle);
//   showDiv.addEventListener("mouseleave", revertShow);
// }

// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// // New edits: Add an event listener to the button
// let button = document.querySelector(".year-button");

// function sortDramas() {
//   // store a reference to original teenDramas before sorting it.
//   // The JSON.parse code copies the original object into its own entity.
//   // Otherwise, the sort() function below would modify the original object.
//   // See this stack overflow question for more: https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
//   let sortedDramas = JSON.parse(JSON.stringify(teenDramas))

//   // create an if statement that checks if the button has the clicked class so that it returns the original state
//   if (button.classList.contains("sorted")) {
//     // the sortedDramas variable is already in the original order, nothing todo
//     console.log('sorted');
//     button.classList.remove("sorted");
//     button.innerHTML=("Click to Sort");
//   } else {
//     console.log('not sorted');
//     button.classList.add("sorted");
//     // otherwise, the dramas need to be sorted
//     sortedDramas.sort(function(a, b) {
//       return a.year - b.year;
//     });
//     button.innerHTML=("Sorted by year!");
//   }

//   console.log(container);

//   console.log(sortedDramas);
//   // re-insert teenDramas in new order
//   container.innerHTML = '';
//   sortedDramas.forEach(displayTDramas);
// }

// button.addEventListener("click", sortDramas);
