function checkPassword() {
    var correctPassword = 'teamrocketblast';
    var userPassword = document.getElementById('password').value;
    var feedback = document.getElementById('feedback');

    if (userPassword === correctPassword) {
        feedback.textContent = "Correct! The next clue is: Look behind the pigpen grid.";
    } else {
        feedback.textContent = "Incorrect password, please try again.";
    }
}
