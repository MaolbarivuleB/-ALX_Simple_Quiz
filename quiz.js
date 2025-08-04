// Declare function checkAnswer
function checkAnswer() {
    // Declare correctAnswer variable
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Retrieve feedback element
    const feedback = document.getElementById('feedback');

    // Check if user selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user answer with correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

// Retrieve the submit button and add event listener
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
