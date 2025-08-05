function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const feedback = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
