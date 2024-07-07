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
        return `Points: ${demeritPoints}`
    }
}

console.log(speedDetector(140))