// Challenge 1: Student Grade Generator (Toy Problem)

function promptUserGrade(input) {
    if (input >= 0 && input <= 100) {
        if (input > 79) {
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