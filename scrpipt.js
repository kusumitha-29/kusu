const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheet",
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyperloop Machine Language",
      "Hyper Tool Multi Language",
      "Home Tool Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "IBM"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";
  feedbackBox.innerText = "";
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.onclick = () => selectOption(button, q.answer);
    optionsBox.appendChild(button);
  });

  scoreBox.innerText = `Score: ${score} / ${questions.length}`;
}

function selectOption(selectedBtn, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (selectedBtn.innerText === correctAnswer) {
    score++;
    feedbackBox.innerText = "✅ Correct!";
    selectedBtn.classList.add("selected", "correct");
  } else {
    feedbackBox.innerText = "❌ Incorrect!";
    selectedBtn.classList.add("selected", "incorrect");
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionBox.innerText = "Quiz Completed!";
  optionsBox.innerHTML = "";
  feedbackBox.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.innerText = `Final Score: ${score} / ${questions.length}`;
}

loadQuestion();
