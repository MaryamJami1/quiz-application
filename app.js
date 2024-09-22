const quizData = [
    {
        question: "What does Html stand for?",
        options: [
            "Hyper transfer markup language",
            "Hyper text machine language",
            "Hyper text markup language",
            "HyperLink text markup language",
        ],
        correct: 2,
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "font-color", "text-color", "background-color"],
        correct: 0,
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
        options: [
            "To display the main content of the page",
            "To link external resources like CSS and JS",
            "To create headings on the page",
            "To store images",
        ],
        correct: 1,
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        correct: 2,
    },
    {
        question: "What is the correct syntax to refer to an external script called 'app.js'?",
        options: [
            "script src='app.js'",
            "script href='app.js'",
            "script ref='app.js'",
            "script link='app.js'",
        ],
        correct: 0,
    },
];

let quizBox = document.getElementById("Quiz")
let questions = document.getElementById("question");
let option1 = document.getElementById("option-1");
let option2 = document.getElementById("option-2");
let option3 = document.getElementById("option-3");
let option4 = document.getElementById("option-4");
let btn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    questions.innerHTML = `${currentQuiz + 1}: ${quizData[currentQuiz].question}`;
    const options = quizData[currentQuiz].options;

    option1.innerHTML = options[0];
    option2.innerHTML = options[1];
    option3.innerHTML = options[2];
    option4.innerHTML = options[3];

}

function getSelectedOption() {
    const answers = document.querySelectorAll(".answer");
    let selectedOption;

    answers.forEach((answer, index) => {
        if (answer.checked) {
            selectedOption = index;

        }
    });

    return selectedOption;
}




btn.addEventListener("click", function () {
    const selectedOption = getSelectedOption();

    if (selectedOption === undefined) {
        Swal.fire("Please select an option!");
        return;
      }

    if (selectedOption === quizData[currentQuiz].correct) {
        score++;
    }

    if (currentQuiz < quizData.length - 1) {

        currentQuiz++;
        document.querySelectorAll(".answer").forEach((radio) => (radio.checked = false));
        loadQuiz();

    } else {
        quizBox.innerHTML = `
    <div class="result"> 
        <h2>
            <i class="fas fa-trophy"></i> <!-- Trophy Icon for Score -->
            Your score: ${score}/${quizData.length} Correct answers
        </h2>
        <p>
            <i class="fas fa-smile"></i> <!-- Smile Icon for Congratulations -->
            Congratulations on completing the quiz!
        </p>
    </div>`;
    }
});

// Load the first question initially
loadQuiz();