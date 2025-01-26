document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseInt(document.getElementById("loanTermInput").value);

    // Validate inputs
    if (isNaN(loanAmount) || loanAmount <= 0 || 
        isNaN(interestRate) || interestRate <= 0 || 
        isNaN(loanTerm) || loanTerm <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate monthly interest rate and monthly payment
    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = 
        (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalRepayment = monthlyPayment * totalPayments;
    const totalInterest = totalRepayment - loanAmount;

    // Display results
    displayResult(monthlyPayment, totalInterest, totalRepayment);
}

function displayResult(monthlyPayment, totalInterest, totalRepayment) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ₹${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ₹${totalInterest.toFixed(2)}</strong></p>
        <p><strong>Total Repayment Amount: ₹${totalRepayment.toFixed(2)}</strong></p>
    `;
}
