const questions = [
    {
        question: "Quanto eh 1+1?",
        answers: ["2", "socorro", "4", "1800","Alternativa E"],
        correctAnswer: 0
    },
    {
        question: "Quanto tempo vive uma tartaruga?",
        answers: ["nao", "sim", "pi elevado a 10398491", "18000","nao sei"],
        correctAnswer: 4
    },
    {
        question: "sim?",
        answers: ["sim","nao","talvez","delet","11"],
        correctAnswer: 0
    },
    {
        question: "7?",
        answers: ["7","nao","talvez","delet","11"],
        correctAnswer: 0
    },
    {
        question: "8?",
        answers: ["8","nao","talvez","delet","11"],
        correctAnswer: 0
    }
];
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}


function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}
window.onload = loadQuestions;