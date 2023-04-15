let btn = document.querySelector(".btn");
let q1 = document.getElementById("atext");
let q2 = document.getElementById("btext");
let q3 = document.getElementById("ctext");
let q4 = document.getElementById("dtext");
let h1 = document.getElementById("h1")
let quiz = document.querySelector(".quiz")
let container = document.querySelector(".container");

let currentQuiz = 0;
let score = 0;

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const answerElements = document.querySelectorAll('.answer');
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };

function getSelected(){
    let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
}
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  h1.innerText = currentQuizData.question;
    q1.innerText = currentQuizData.a;
    q2.innerText = currentQuizData.b;
    q3.innerText = currentQuizData.c;
    q4.innerText = currentQuizData.d;
};

loadQuiz();
btn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        container.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button class="btn1"onclick="history.go(0)">Play Again</button>
          ` // location.reload() won't work in CodePen for security reasons;
      }
    }
  });