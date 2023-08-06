console.log('script running');

// fetching elements
let btn = document.querySelector('button');
let baseCountry = document.querySelector('input[name=base-country]');
let amount = document.querySelector('input[name=amount]');
let targetCountry = document.querySelector('input[name=target-country]');
let resultDisplayer = document.querySelector('.result-displayer');
console.log(resultDisplayer);
let baseBox = document.querySelector('.base-box');
let targetBox = document.querySelector('.target-box');
let exchangeRateBox = document.querySelector('.exchange-rate-box');

// adding event listner to the button
btn.addEventListener('click', (event) => {
  // stopping form submission
  event.preventDefault();

  let baseCountryCode;
  let targetCountryCode;

  fetch(`https://restcountries.com/v3/name/${baseCountry.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      baseCountryCode = Object.keys(data[0].currencies)[0];

      // implementing another fetch func for second country code
      fetch(`https://restcountries.com/v3/name/${targetCountry.value}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          targetCountryCode = Object.keys(data[0].currencies)[0];

          // sending all data to fetchExchangeRate function
          fetchExchangeRate(baseCountryCode, targetCountryCode, amount.value);
        });
    });
});

// function which converts currency according to current exchange rate
const fetchExchangeRate = (baseCode, targetCode, amtVal) => {
  const APIKEY = 'acef3626c67d93d840c1230f';
  let url = `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${baseCode}/${targetCode}/${amtVal}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // sending all these data to renderData() to render
      renderData(
        data.conversion_result,
        amtVal,
        data.base_code,
        data.target_code,
        data.conversion_rate
      );
    });
};

// function which renders data
const renderData = (
  convertedAmt,
  enteredAmt,
  baseCurrCode,
  targetCurrCode,
  conversionRate
) => {
  // removing and adding classes to result-displayer box
  resultDisplayer.classList.remove('invisible');

  // inserting values to HTML elements
  baseBox.textContent = `${enteredAmt} ${baseCurrCode}`;
  targetBox.textContent = `${convertedAmt} ${targetCurrCode}`;
  exchangeRateBox.textContent = `Exchange rate from ${baseCurrCode} to ${targetCurrCode} is : ${conversionRate}`;

  // clearing all values
  baseCountry.value = '';
  amount.value = '';
  targetCountry.value = '';
};
