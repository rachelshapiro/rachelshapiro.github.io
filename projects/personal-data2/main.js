
// keep this viewable for all examples. These are JavaScript objects
let screenTime = [
  {
    day: "April 7",
    total:  413,
    pickups: 158, 
    notifications: 305,
    topAppsUsed: "Tik Tok (2hr 16 min), Messages (1hr), Mail(35 min)"
  },
  {
    day: "April 8", 
    total: 359,
    pickups:195, 
    notifications: 266,
    topAppsUsed: "Tik Tok (1hr 35 min), Instagram (1hr 21 min), Messages(35 min)"
  },
  {
    day: "April 9", 
    total: 263,
    pickups: 237, 
    notifications: 298,
    topAppsUsed: "Tik Tok (1hr 11 min), Messages (1hr 9min), Instagram (42 min)"
  },
  {
    day: "April 10", 
    total: 346,
    pickups: 138, 
    notifications: 215,
    topAppsUsed: "Tik Tok (1hr 42 min), Instagram (1hr 36 min), Messages(37 min)"
  },
  {
    day: "April 11", 
    total: 255,
    pickups: 134, 
    notifications: 239,
    topAppsUsed: "Instagram (1hr 1 min), Tik Tok (58min), Messages(41 min)"
  },
  {
    day: "April 12", 
    total: 324,
    pickups: 134, 
    notifications: 239,
    topAppsUsed: "Tik Tok (2hr 15 min), Instagram (54 min), Messages(49 min)"
  }
];


let container = document.querySelector(".screenTimeContainer");
let container2 = document.querySelector(".topAppsUsed");
let dateContainer = document.querySelector(".dateContainer");
let container4 = document.querySelector(".column2");
let container5 = document.querySelector(".topAppsUsed"); 


function displayDays(day) {
  // creates a new div; appends that div to the container
  let newDay = document.createElement("div");
  container.appendChild(newDay);
  // // adds a class to each new div
  // i++;
  newDay.classList.add("day");
  // places the show name to the div
  // newDay.classList.add("day" + [i]);
  // let newDayDiv = container.appendChild(newItem);
  newDay.innerHTML = day.day
  console.log(day);
}
// loops through the teen dramas and runs the displayTDramas function for each one
screenTime.forEach(displayDays);

function displayTotals(total) {
  // creates a new div; appends that div to the container
  let newTotal = document.createElement("div");
  container.appendChild(newTotal);
  // adds a class to each new div
  newTotal.classList.add("total");
  // places the show name to the div
  newTotal.style.width = 2.5*total.total + "px";
  newTotal.style.columnCount = "6"
  console.log(total);
}
// loops through the teen dramas and runs the displayTDramas function for each one
screenTime.forEach(displayTotals);

function displayPickups(pickup) {
  // creates a new div; appends that div to the container
  let newPickUp = document.createElement("div");
  container.appendChild(newPickUp);
  // adds a class to each new div
  newPickUp.classList.add("pickup");
  // places the show name to the div
  newPickUp.style.width = 2.5*pickup.pickups + "px";
  // newPickUp.style.columnCount = "6"
  console.log(pickup);
}
// loops through the teen dramas and runs the displayTDramas function for each one
screenTime.forEach(displayPickups);

function displayNotifications(notifications) {
  // creates a new div; appends that div to the container
  let newNotifications = document.createElement("div");
  container.appendChild(newNotifications);
  // adds a class to each new div
  newNotifications.classList.add("notifications");
  // places the show name to the div
  newNotifications.style.width = 2.5*notifications.notifications + "px";
   // newNotifications.style.columnCount = "6"
  console.log(notifications);
}
// loops through the teen dramas and runs the displayTDramas function for each one
screenTime.forEach(displayNotifications);


let topAppsApr7 = [
  {name: "TikTok", amount: 136},
  {name: "Messages", amount: 60},
  {name: "Mail", amount: 35}
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
// let container6 = document.querySelector(".topAppsUsed");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displayTopAppsApr7(topAppsApr7) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr7Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr7");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr7" + [i]);
  // places the flower name and amount to the div
  topAppsApr7Div.innerHTML = topAppsApr7.name + " – " + topAppsApr7.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr7Div.style.height = topAppsApr7.amount + "px";
  console.log(topAppsApr7);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr7.forEach(displayTopAppsApr7);


let topAppsApr8 = [
  {name: "TikTok", amount: 95},
  {name: "Instagram", amount: 81},
  {name: "Messages", amount: 35}
  ];

function displayTopAppsApr8(topAppsApr8) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr8Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr8");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr8" + [i]);
  // places the flower name and amount to the div
  topAppsApr8Div.innerHTML = topAppsApr8.name + " – " + topAppsApr8.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr8Div.style.height = topAppsApr8.amount + "px";
  console.log(topAppsApr8);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr8.forEach(displayTopAppsApr8);

let topAppsApr9 = [
  {name: "TikTok", amount: 71},
  {name: "Messages", amount: 69},
  {name: "Instagram", amount: 42}
  ];

function displayTopAppsApr9(topAppsApr9) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr9Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr9");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr9" + [i]);
  // places the flower name and amount to the div
  topAppsApr9Div.innerHTML = topAppsApr9.name + " – " + topAppsApr9.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr9Div.style.height = topAppsApr9.amount + "px";
  console.log(topAppsApr9);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr9.forEach(displayTopAppsApr9);

let topAppsApr10 = [
  {name: "TikTok", amount: 102},
  {name: "Instagram", amount: 96},
  {name: "Messages", amount: 37}
  ];

function displayTopAppsApr10(topAppsApr10) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr10Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr10");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr10" + [i]);
  // places the flower name and amount to the div
  topAppsApr10Div.innerHTML = topAppsApr10.name + " – " + topAppsApr10.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr10Div.style.height = topAppsApr10.amount + "px";
  console.log(topAppsApr10);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr10.forEach(displayTopAppsApr10);

let topAppsApr11 = [
  {name: "Instagram", amount: 61},
  {name: "TikTok", amount: 58},
  {name: "Messages", amount: 41}
  ];

function displayTopAppsApr11(topAppsApr11) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr11Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr11");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr11" + [i]);
  // places the flower name and amount to the div
  topAppsApr11Div.innerHTML = topAppsApr11.name + " – " + topAppsApr11.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr11Div.style.height = topAppsApr11.amount + "px";
  console.log(topAppsApr11);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr11.forEach(displayTopAppsApr11);


let topAppsApr12 = [
  {name: "TikTok", amount: 135},
  {name: "Instagram", amount: 54},
  {name: "Messages", amount: 49}
  ];

function displayTopAppsApr12(topAppsApr12) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let topAppsApr12Div = container2.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("topAppsApr12");
  // adds a specific class to each new div
  newItem.classList.add("topAppsApr12" + [i]);
  // places the flower name and amount to the div
  topAppsApr12Div.innerHTML = topAppsApr12.name + " – " + topAppsApr12.amount + "min";
  // sets height of flower to the amount. try changing height to width, or padding
  topAppsApr12Div.style.height = topAppsApr12.amount + "px";
  console.log(topAppsApr12);
}
// loops through the flowers and runs the displayFlowers function for each one
topAppsApr12.forEach(displayTopAppsApr12);





// let container = document.querySelector(".screenTimeContainer");

// function displayDays(day) {
//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   let dayDiv = container.appendChild(newItem);


//   // adds a class to each new div
//   newItem.classList.add("day");
//   // places the show name to the div
//   dayDiv.innerHTML = day.name;


//   // Same process as above to add the show year, needs to go here so that it doesnt get overridden
//   let newNotificationsItem = document.createElement("div");
//   let notificationsDiv = dayDiv.appendChild(newNotificationsItem);

//   // create a function that will replace the HTML of the show div with the episode title
//   function displayEpTitle() {
//     dayDiv.innerHTML = day.notifications;
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

