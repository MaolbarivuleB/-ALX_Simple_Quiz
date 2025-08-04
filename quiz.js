function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === "4") {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! The correct answer is 4.";
        feedback.style.color = "red";
    }
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
