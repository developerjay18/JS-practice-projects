console.log('Script Runnning...');

// logic starts from here...
// fetching required documents from web
let ValueBoxes = document.querySelectorAll('.value');

function countDown() {
  let launchDate = new Date('2023-10-05 14:10:00 ');
  let currentDate = new Date();
  let diffrence = (launchDate - currentDate) / 1000;

  // converting seconds into required data forms..
  let months = Math.floor(diffrence / 3600 / 24 / 30); // reminaing months
  let days = Math.floor((diffrence / 3600 / 24) % 30); // remaining days
  let hours = Math.floor((diffrence / 3600) % 24); // remaining hours
  let minutes = Math.floor(diffrence / 60) % 60; // remaining minutes
  let seconds = Math.floor(diffrence % 60);

  // inserting data into web..
  ValueBoxes[0].textContent = months;
  ValueBoxes[1].textContent = days;
  ValueBoxes[2].textContent = hours;
  ValueBoxes[3].textContent = minutes;
  ValueBoxes[4].textContent = seconds;
}

// updating data every second
setInterval(() => {
  countDown();
}, 1000);
