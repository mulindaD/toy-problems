# Toy Problems Code Challenge

## Description
This project is a Moringa School Code challenge project that includes three different calculators:
1. Student Grade Calculator
2. Speed Detector
3. Net Salary Calculator

Each calculator takes specific inputs and provides results based on predefined criteria.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [License](#license)

## Installation
To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/toy-problems-code-challenge.git
   ```
2. Navigate to the project directory:
   ```
   cd toy-problems-code-challenge
   ```
3. Open the `index.html` file in your web browser to test it out(This was a bonus execution from the challenge that was required).

No additional installation or setup is required as this is a static HTML/JavaScript project.

## Usage
The main goal of this project was to successfully execute the three challenges: Student Grade Calculator, Net Salary Calculation and Speed Detector.
You can test the calculators out by opening the `index.html` file in your web browser, you'll see three forms:

1. **Student Grade Calculator**: 
   - Enter a student's grade (0-100).
   - Click "Calculate Grade" to see the corresponding letter grade.

2. **Speed Detector**: 
   - Enter a car's speed in km/h.
   - Click "Check Speed" to see if the speed is okay or if there are demerit points.

3. **Net Salary Calculator**: 
   - Enter the basic salary and benefits.
   - Click "Calculate Net Salary" for a salary breakdown including deductions and net pay.

## Features
- Student Grade Calculator: Converts numerical grades to letter grades. e,g 80 -> Returns an 'A' Grade.
- Speed Detector: Determines if a driver should receive demerit points based on speed. e.g 80 km/h returns 2 Demerit Points.
- Net Salary Calculator: Computes net salary after tax and other deductions.
- Responsive design for use on various device sizes.

## Technologies Used
- HTML5
- CSS (Tailwind CSS for styling) - I used this project to further deepen the practice I had working with tailwindcss.
- JavaScript (Vanilla JS for functionality). Beyond the challenge requirement; I read up and implemented DOM manipulation and event handling to implement an HTML page with three forms to test the Javascript functionality.

## File Structure
```
└── 📁toy-problems
    └── 📁.vscode
        └── settings.json
    └── README.md
    └── 📁challengeFiles
        └── netSalary.js
        └── speedDetector.js
        └── studentGrade.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── 📁src
        └── input.css
        └── output.css
    └── tailwind.config.js
```


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
