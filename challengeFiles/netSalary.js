// Net Salary Calculator (Toy Problem)

function netSalaryCalc(basicSal, benefits) {
    if (typeof basicSal !== 'number' || typeof benefits !== 'number'){
        return `Please enter a number for the basic salary or benefits`
    }

    const grossSalary = basicSal + benefits
    console.log(`The gross Salary: ${grossSalary}`)
    

    const taxableIncome = grossSalary - nssfCalculation(grossSalary)
    console.log(`The NSSF Deduction is: ${nssfCalculation(grossSalary)} \nThe Taxable income is: ${taxableIncome}`)

    // Adding Housing Levy and accounting for Housing Levy Relief from the tax computation.
    function housingLevy (salary) {
        return 0.015 * salary
    }
    const housingLevyCalc = housingLevy(grossSalary) 

    const housingRelief = 0.15 * housingLevyCalc
   
    function calculatePayee(taxableMoney) {
        
        const personalRelief = 2400
        const insuranceRelief = 0.15 * calculateNhifDeduction(grossSalary)

        //Testing Insurance Premium and Insurance Relief
        console.log(`The insurance Premium is: ${calculateNhifDeduction(grossSalary)}\nThe Insurance relief is: ${insuranceRelief}`)

        // Calculating PAYE Tax Brackets
        if (taxableMoney <= 24000) {
            return 0
        } else if (taxableMoney > 24000 && taxableMoney <= 32333) {
            return ((taxableMoney - 24000) * 0.25) + (24000 * 0.1) - personalRelief - insuranceRelief - housingRelief
        } else if (taxableMoney > 32333 && taxableMoney <= 500000) {
            return ((taxableMoney - 32333) * 0.3) + ((32333 - 24000) * 0.25) + (24000 * 0.1) - personalRelief - insuranceRelief - housingRelief
        } else if (taxableMoney > 500000 && taxableMoney <= 800000) {
            return ((taxableMoney - 500000) * 0.325) + ((500000 - 32444) * 0.3) + ((32333 - 24000) * 0.25) + (24000 * 0.1) - personalRelief - insuranceRelief - housingRelief
        } else if (taxableMoney > 800000) { 
            return ((taxableMoney - 800000)* 0.35) + ((800000 - 500001) * 0.325) + ((500000 - 32444) * 0.3) + ((32333 - 24000) * 0.25) + (24000 * 0.1) - personalRelief - insuranceRelief - housingRelief
        }
    }

    const payeeCalculation = calculatePayee(taxableIncome)

    // Testing Payee calculation 
    console.log(`The Payee Calculation: ${payeeCalculation}`)
    

   // Net Salary Calculation
    const netSalary = grossSalary - nssfCalculation(grossSalary) - payeeCalculation - housingLevyCalc - calculateNhifDeduction(grossSalary)

    return netSalary 
}

// Testing Net Salary calculation by adding benefits and basic salary 
console.log(`The net salary is : ${netSalaryCalc(60000, 10000)}`) 

// Function for calculating NHIF Deduction
function calculateNhifDeduction (salary) {
    if (salary <= 5999) {
        return 150
    } else if (salary > 6000 && salary < 8000) {
        return 300
    } else if (salary >= 8000 && salary < 12000) {
        return 400
    } else if (salary >= 12000 && salary < 15000) {
        return 500
    } else if (salary >= 15000 && salary < 20000) {
        return 600
    } else if (salary >= 20000 && salary < 25000) {
        return 750
    } else if (salary >= 25000 && salary < 30000) {
        return 850
    } else if (salary >= 30000 && salary < 35000) {
        return 900
    } else if (salary >= 35000 && salary < 40000) {
        return 950
    } else if (salary >= 40000 && salary < 45000) {
        return 1000
    } else if (salary >= 45000 && salary < 50000) {
        return 1100
    } else if (salary >= 50000 && salary < 60000) {
        return 1200
    } else if (salary >= 60000 && salary < 70000) {
        return 1300
    } else if (salary >= 70000 && salary < 80000) {
        return 1400
    } else if (salary >= 80000 && salary < 90000) {
        return 1500
    } else if (salary >= 90000 && salary < 100000) {
        return 1600
    } else if (salary >= 100000) {
        return 1700
    }
}

// Function for calculating NSSF calculation
function nssfCalculation (pensionablePay) {

    if (pensionablePay <= 36000) {
        return 0.06 * pensionablePay
    } else if(pensionablePay > 36000) {
        return 36000 * 0.06
    }
}

// Testing NSSF Deductions
// console.log(`Nssf Deductions: ${nssfCalculation(300000)}`)

// Testing NHIF Deductions
// console.log (`NHIF Deductions: ${calculateNhifDeduction(130000)}`)


// Adding Event handler to tie the forms to the JS Code
function handleSalarySubmission(event) {
    event.preventDefault();
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    const result = netSalaryCalc(basicSalary, benefits);
    
    // Doing a detailed Output for the Net salary calculation
    let output = '';
    if (typeof result === 'number') {
        const grossSalary = basicSalary + benefits;
        const nssf = nssfCalculation(grossSalary);
        const nhif = calculateNhifDeduction(grossSalary);
        const taxableIncome = grossSalary - nssf;
        const payee = grossSalary - nssf - result;

        output = `
            Gross Salary: KES ${grossSalary.toFixed(2)}<br>
            NSSF Deduction: KES ${nssf.toFixed(2)}<br>
            NHIF Deduction: KES ${nhif.toFixed(2)}<br>
            Taxable Income: KES ${taxableIncome.toFixed(2)}<br>
            PAYE: KES ${payee.toFixed(2)}<br>
            Net Salary: KES ${result.toFixed(2)}
        `;
    } else {
        output = result; // This will be the error message
    }
    
    document.getElementById('output3').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function() {
    const salaryForm = document.getElementById('salaryForm');
    if (salaryForm) {
        salaryForm.addEventListener('submit', handleSalarySubmission);
    }
});
