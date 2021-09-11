// html elements

// questions
const questions = [
  {
    question: "How would you properly link a stylesheet to an HTML page?",
    answers: [
      {
        correct: true,
        text: '<link rel="stylesheet" href="./style.css" />',
      },
      {
        correct: false,
        text: '<link rel="stylesheet" src="./style.css" />',
      },
      {
        correct: false,
        text: '<style type="css" href="./style.css" />',
      },
      {
        correct: false,
        text: '<a rel="stylesheet" href="./style.css" />',
      },
    ],
  },
  {
    question: "What is a regular expression?",
    answers: [
      {
        correct: true,
        text: "A pattern for matching characters or groups of characters in strings.",
      },
      {
        correct: false,
        text: "Any simple arithmetic equation, such as adding two numbers together.",
      },
      {
        correct: false,
        text: "A function that accepts no arguments and returns a primitive data type, such as boolean, number, or string.",
      },
      {
        correct: false,
        text: "A standard of practice in which developers aim to declare variables using clear, easy to read names as opposed to ambiguous, arbitrary characters.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a javascript keyword for declaring a variable?",
    answers: [
      {
        correct: true,
        text: "set",
      },
      {
        correct: false,
        text: "let",
      },
      {
        correct: false,
        text: "const",
      },
      {
        correct: false,
        text: "var",
      },
    ],
  },
  {
    question: "How would you add a comment in CSS?",
    answers: [
      {
        correct: true,
        text: "/* This is a comment */",
      },
      {
        correct: false,
        text: "\\ This is a comment \\",
      },
      {
        correct: false,
        text: "<!-- This is a comment -->",
      },
      {
        correct: false,
        text: "*** This is a comment ***",
      },
    ],
  },
  {
    question:
      "Which of the following is considered a truthy value in javascript?",
    answers: [
      {
        correct: true,
        text: '"0"',
      },
      {
        correct: false,
        text: "0",
      },
      {
        correct: false,
        text: '""',
      },
      {
        correct: false,
        text: "undefined",
      },
    ],
  },
  {
    question:
      "Which of the following html elements does not require a closing tag?",
    answers: [
      {
        correct: true,
        text: "img",
      },
      {
        correct: false,
        text: "a",
      },
      {
        correct: false,
        text: "script",
      },
      {
        correct: false,
        text: "header",
      },
    ],
  },
  {
    question: "What symbol is used to select elements by class in CSS?",
    answers: [
      {
        correct: true,
        text: ".",
      },
      {
        correct: false,
        text: "*",
      },
      {
        correct: false,
        text: "#",
      },
      {
        correct: false,
        text: "~",
      },
    ],
  },
  {
    question:
      "What type of data is captured when a user responds to the window.prompt() method?",
    answers: [
      {
        correct: true,
        text: "String",
      },
      {
        correct: false,
        text: "Number",
      },
      {
        correct: false,
        text: "Boolean",
      },
      {
        correct: false,
        text: "Any data type can be captured when a user responds to a window prompt.",
      },
    ],
  },
  {
    question:
      "How would you declare a function named 'myFunction' in javascript.",
    answers: [
      {
        correct: true,
        text: "function myFunction() {}",
      },
      {
        correct: false,
        text: "const function = myFunction() {}",
      },
      {
        correct: false,
        text: "create.function(myFunction);",
      },
      {
        correct: false,
        text: "let myFunction = {}",
      },
    ],
  },
  {
    question: "How do you write the 'not equal to' operator in javascript?",
    answers: [
      {
        correct: true,
        text: "!=",
      },
      {
        correct: false,
        text: "/=",
      },
      {
        correct: false,
        text: "?",
      },
      {
        correct: false,
        text: "*=",
      },
    ],
  },
];

// Shuffle order of an array
function shuffle(selectedArray) {
  let m = selectedArray.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = selectedArray[m];
    selectedArray[m] = selectedArray[i];
    selectedArray[i] = t;
  }
  return selectedArray;
}

// begin quiz
    // shuffle questions array
    // timer starts counting down
    // render first question
        // once question is answered:
        // update score or time accordingly
        // remder mext question (repeat)
    // once time is up or questions are out:
    // prompt for initials
    // save to localstorage