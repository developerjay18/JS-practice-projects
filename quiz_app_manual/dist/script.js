console.log('Script running..');

// Quiz data
const quizData = [
  {
    question: 'Which of the following is a client site language?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question: 'What does CSS stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'b',
  },
];

// fetching required elements from HTML
let question = document.querySelector('.question');
let options = document.querySelectorAll('.option');
let button = document.querySelector('.submit');
let optionInputs = document.querySelectorAll('.option-input');

// creating functions for perrforming operations
let index = 0;
let right = 0;
let wrong = 0;
let quizLength = quizData.length;
let counter = 0;

// loading question and rendering on the web
const loadQuestion = () => {
  if (counter === quizLength) {
    quizEnd();
    return;
  }

  let fetched_question = quizData[index];

  // inserting data..
  question.textContent = `${index + 1}) ${fetched_question.question}`;
  options[0].childNodes[3].textContent = fetched_question.a;
  options[1].childNodes[3].textContent = fetched_question.b;
  options[2].childNodes[3].textContent = fetched_question.c;
  options[3].childNodes[3].textContent = fetched_question.d;
};

// fetching submitted of user // <--- yaha par boht problem hui thi return karne me value ko --->
const getAnswer = () => {
  let ans;
  optionInputs.forEach((input) => {
    if (input.checked === true) {
      ans = input.value;
    }
  });
  return ans;
};

// submitting the quiz and calculate results
const submitQuiz = () => {
  let fetched_question = quizData[index];
  let ans = getAnswer();
  if (ans === fetched_question.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  counter++;
  loadQuestion();
  clearOptions();
  return;
};

// clearing all options and reseting it
const clearOptions = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

// ending the quiz
const quizEnd = () => {
  console.log('Quiz ended');
  let quizcontainer = document.querySelector('.quiz-container');
  quizcontainer.innerHTML = `
  <h3 class="text-3xl">${right}/${quizLength} is your score.</h3>
  <h2 class="text-2xl">Thank you for playing our quiz!!!</h2>
  `;
};

// Adding Event listner on quiz submission
button.addEventListener('click', () => {
  submitQuiz();
});

// initial call
loadQuestion();
