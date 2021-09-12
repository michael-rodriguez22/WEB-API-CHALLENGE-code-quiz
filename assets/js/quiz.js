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

// begin quiz
function beginQuiz() {}
// begin quiz
// timer starts counting down
// render first question
// once question is answered:
// update score or time accordingly
// remder mext question (repeat)
// once time is up or questions are out:
// prompt for initials
// save to localstorage
