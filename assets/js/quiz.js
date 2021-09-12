// html elements
const timerEl = document.getElementById("timer-el");
const sections = {
  intro: document.getElementById("intro"),
  questionCard: document.getElementById("question-card"),
  results: document.getElementById("results"),
  highScores: document.getElementById("high-scores"),
}


// page load
let questionCounter;
let correctQuestions;
let score;
function pageLoad() {
  timerEl.style.display = "none";
  for (item in sections) sections[item].style.display = "none";
  sections.intro.style.display = "flex";
  questionCounter = 0;
  correctQuestions = 0;
  score = 0;
}
pageLoad();

// begin quiz
function beginQuiz() {
  // beginCountDown();
  questionCounter = 0;
  renderQuestion(questions[questionCounter])
}

// render question
function renderQuestion(question) {
  if (questionCounter >= questions.length) return renderResults();
  sections.intro.style.display = "none";
  sections.questionCard.style.display = "flex";
  document.getElementById("question-text-el").innerText = question.text;
  document.getElementById("answers-container-el").innerHTML = "";
  for (let i = 0; i < question.answers.length; i++) {
    let btn = document.createElement("button");
    btn.className = "answer-choice";
    btn.innerText = question.answers[i];
    // btn.onclick = captureAnswer();
    document.getElementById("answers-container-el").appendChild(btn)
  }
}

// capture answer

// skip question
function skipQuestion() {
  questionCounter ++;
  renderQuestion(questions[questionCounter]);
}

// render results
function renderResults() {
  sections.questionCard.style.display = "none";
  sections.results.style.display = "flex";
  document.getElementById("correct-questions-el").innerText = `${correctQuestions}/10`;
  // document.getElementById("time-remaining-el").innerText = timeRemaining; 
  document.getElementById("final-score-el").innerText = score; 
}

// render high scores
function renderHighScores() {
  for (item in sections) sections[item].style.display = "none";
  sections.highScores.style.display = "flex";
}

// begin quiz
// timer starts counting down
// render first question
// once question is answered:
// update score or time accordingly
// remder mext question (repeat)
// once time is up or questions are out:
// prompt for initials
// save to localstorage
