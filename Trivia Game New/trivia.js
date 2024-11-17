const questions = [
    "What is the largest country in the world by land area?",
    "Which planet is known as the Red Planet?",
    "Who painted the Mona Lisa?",
    "What is the capital of Australia?",
    "Which animal is the national animal of Scotland?",
    "What is the largest ocean in the world?",
    "Who wrote the play Romeo and Juliet?",
    "What is the chemical symbol for gold?",
    "Which country hosted the 2022 FIFA World Cup?",
    "What is the tallest mountain in the world?",
];

const choices = [
    ["Russia", "Canada", "China", "United States"],
    ["Mars", "Venus", "Jupiter", "Saturn"],
    ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    ["Sydney", "Melbourne", "Canberra", "Perth"],
    ["Unicorn", "Lion", "Dragon", "Eagle"],
    ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    ["Ag", "Au", "Fe", "Hg"],
    ["Qatar", "Brazil", "Russia", "Germany"],
    ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"]
];

const correctAnswers = [
    "Russia", 
    "Mars", 
    "Leonardo da Vinci", 
    "Canberra", 
    "Unicorn", 
    "Pacific Ocean", 
    "William Shakespeare", 
    "Au", 
    "Qatar", 
    "Mount Everest"
];
let questionCountIndex = 0;
let score = 0;
const questionGap = document.getElementById("question");
const counter = document.getElementById("question-counter");
const buttonDiv = document.getElementById("buttons");
const result = document.getElementById("result");

function displayQuestion() {
    const restartArea = document.getElementById("restart-area");
    const restartBtn = document.getElementById("restart");

    if (questionCountIndex < questions.length) {
    questionGap.innerHTML = questions[questionCountIndex];
    counter.innerHTML = `Question ${questionCountIndex + 1} out of ${questions.length}.`;
    for (let i = 0; i<choices[questionCountIndex].length; i++) {
        const btns = document.getElementById(`choice${i + 1}`);
        btns.innerHTML = choices[questionCountIndex][i];
        btns.value = choices[questionCountIndex][i];
    }
    } else {
    counter.classList.add("hidden");
    buttonDiv.classList.add("hidden");
    questionGap.classList.add("hidden");
    result.innerHTML = `You have ${score} correct answers out of ${questions.length}`;
    const message = document.getElementById("message");
    if (score === 10) {
        message.classList.remove("hidden")
        message.innerHTML = "You are a genius";
        message.style.color = "darkgreen";
    } else if (score >= 7) {
        message.classList.remove("hidden")
        message.innerHTML = "You are good, no harm with practicing";
        message.style.color = "darkgreen";
    } else {
        message.classList.remove("hidden")
        message.innerHTML = "You need to practice bro";
        message.style.color = "darkred";
    }
    }
}

displayQuestion();

function checkAnswer(button) {
    if (button.value === correctAnswers[questionCountIndex]) {
        score++;
    }
    questionCountIndex++;
    displayQuestion();
}

function restart() {
    message.classList.add("hidden");
    counter.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
    questionGap.classList.remove("hidden");
    result.classList.add("hidden");
    score = 0;
    questionCountIndex = 0;
    displayQuestion();
}