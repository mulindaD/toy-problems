// Challenge 1: Student Grade Generator (Toy Problem)

function promptUserGrade(input) {
    if (input >= 0 && input <= 100) {
        if (input >= 79) {
            return 'A'
        } else if(input >= 60 && input < 79){
            return 'B'
        } else if(input >= 49 && input < 60) {
            return 'C'
        } else if (input >= 40 && input < 49) {
            return 'D'
        } else if (input < 40) {
            return 'E'
        }
    }
    return 'Please put a number between 0 and 100!'
}

// console.log(promptUserGrade(49)) ----> Test statement for the function.

// Function to handle form submission
function handleGradeSubmission(event) {
    event.preventDefault();
    const grade = document.getElementById('studentGrade').value;
    const result = promptUserGrade(parseFloat(grade));
    document.getElementById('output1').textContent = `The student grade is: ${result}`;
}

// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const gradeForm = document.getElementById('gradeForm');
    if (gradeForm) {
        gradeForm.addEventListener('submit', handleGradeSubmission);
    }
});