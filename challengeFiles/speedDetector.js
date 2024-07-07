// Challenge 2: Speed Detector (Toy Problem)

function speedDetector(carSpeed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (carSpeed < speedLimit) {
        return "Ok"
    }

    const demeritPoints = Math.floor((carSpeed - speedLimit)/kmPerPoint)

    if (demeritPoints > 12) {
        return "License suspended"
    } else if (demeritPoints <= 12) {
        return `${demeritPoints} demerit points!`
    }
}

// console.log(speedDetector(140))

// Function to handle form submission
function handleSpeedSubmission(event) {
    event.preventDefault();
    const speed = document.getElementById('speed').value;
    const result = speedDetector(parseFloat(speed));
    document.getElementById('output2').textContent = `${result}`;
}

// Adding the event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const speedForm = document.getElementById('speedForm');
    if (speedForm) {
        speedForm.addEventListener('submit', handleSpeedSubmission);
    }
});