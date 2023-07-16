// random quote generator using API
console.log('script running..');

// feching elements
let quoteDisplayer = document.querySelector('.quote-displayer');
let quoteBox = document.querySelector('.quote');
let authorBox = document.querySelector('.author');
let button = document.querySelector('button');

// API stuffs
let apiUrl = 'https://api.quotable.io/random';

// making function to fetch data from API and display data
function displayQuote() {
  // fetching data from API
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let quote = data.content;
      let author = data.author;
      quoteDisplayer.style.display = 'block';
      quoteBox.textContent = quote;
      authorBox.textContent = author;
    });
}

// calling event on button click
button.addEventListener('click', () => {
  displayQuote();
});
