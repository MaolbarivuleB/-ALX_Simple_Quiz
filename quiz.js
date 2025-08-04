const submitButton = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedOption === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    } else {
        const userAnswer = selectedOption.value;

        if (userAnswer === "4") {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect! The correct answer is 4.";
            feedback.style.color = "red";
        }
    }
}

submitButton.addEventListener('click', checkAnswer);
