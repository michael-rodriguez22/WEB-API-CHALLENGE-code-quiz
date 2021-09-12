// html elements
const timerEl = document.getElementById("timer-el");
const sections = {
  intro: document.getElementById("intro"),
  questionCard: document.getElementById("question-card"),
  results: document.getElementById("results"),
  highScores: document.getElementById("high-scores"),
}


// page load
function pageLoad() {
  timerEl.style.display = "none";
  for (item in sections) {
    if (item !== "intro") {
      sections[item].style.display = "none";
    }
  }
  console.log("load")
}

pageLoad();

// render question
let questionCounter = 0;

function renderQuestion(question) {
  sections.intro.style.display = "none";
  sections.questionCard.style.display = "flex";
  document.getElementById("question-text-el").innerText = question.text;
  for (let i = 0; i < question.answers.length; i++) {
    let btn = document.createElement("button");
    btn.className = "answer-choice";
    btn.innerText = question.answers[i];
    // btn.onclick = captureAnswer();
    document.getElementById("answers-container-el").appendChild(btn)
  }
}

// begin quiz
function beginQuiz() {
  // beginCountDown();
  questionCounter = 0;
  renderQuestion(questions[questionCounter])
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
