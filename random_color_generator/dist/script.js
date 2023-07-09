console.log('script running');

// fetching elements from web..

let container = document.querySelector('.main-container');
let colorHexdiv = document.querySelector('.color-hex');
let button = document.querySelector('button');
console.log(button);

// function to change bg on click
function changeRGB() {
  // generating random numbers for RGB
  let red = Math.floor(Math.random() * (0, 255) + 0);
  let green = Math.floor(Math.random() * (0, 255) + 0);
  let blue = Math.floor(Math.random() * (0, 255) + 0);

  // setting values to the elements of web..
  container.style.backgroundColor = `rgb(${red},${green},${blue})`;
  colorHexdiv.textContent = `rgb (${red},${green},${blue})`;
}

// calling function on click
button.addEventListener('click', () => {
  changeRGB();
});
