function checkAnswer() {
    // Retrieve the selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = "4";

    // Compare user's answer with the correct answer and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
        feedback.style.color = "red";
    }
}

// Retrieve the submit-answer button and add an event listener to it
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
