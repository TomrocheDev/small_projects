function renderTransactions(arrayToRender, container) {
    arrayToRender.forEach((transaction) => {
        let newTransaction = document.createElement("div");

        if (transaction.type == "income") {
            newTransaction.setAttribute("class", "transaction-item item-income");
            newTransaction.innerHTML = `
            <div class="transaction-left-container">
                <div class="percentage-icon">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div class="transaction-item-title-date">
                    <div class="transaction-title">${transaction.description}</div>
                    <div class="transaction-date">${transaction.date}</div>
                </div>
            </div>
            <div class="transaction-amount">
                <span class="transaction-actual-amount">$${transaction.amount}</span>
            </div>
            <i class="fa-regular fa-trash-can delete-trans"></i>
            `;
            transactionsContainer.append(newTransaction);
        } else {
            newTransaction.setAttribute("class", "transaction-item item-expense");
            newTransaction.innerHTML = `
            <div class="transaction-left-container">
                <div class="percentage-icon second">
                    <i class="fa-solid fa-arrow-trend-down"></i>
                </div>
                <div class="transaction-item-title-date">
                    <div class="transaction-title">${transaction.description}</div>
                    <div class="transaction-date">${transaction.date}</div>
                </div>
            </div>
            <div class="transaction-amount">
                <span class="transaction-actual-amount">$${transaction.amount}</span>
            </div>
            <i class="fa-regular fa-trash-can delete-trans"></i>
            `;
            container.append(newTransaction);
        }
    });
}

function calcPercentage(income, expense, typeToGet) {
    let calculation = income + expense;
    calculation = (typeToGet / calculation) * 100;
    return calculation;
}

const totalBalanceAmount = document.getElementById("total-card-balance");
const totalIncomeBalance = document.getElementById("total-income-balance");
const totalExpenseBalance = document.getElementById("total-expense-balance");

const incomePercentage = document.getElementById("percentage-text-income");
const expensePercentage = document.getElementById("percentage-text-expense");

const transactionsContainer = document.querySelector(".transactions-container");

// Check if storage already exists. If not, set values to 0.
if (!localStorage["transactions"]) {
    totalBalanceAmount.innerHTML = "0";
    totalIncomeBalance.innerHTML = "0";
    totalExpenseBalance.innerHTML = "0";
}

// Sort income and expense transactions
// Check if local storage exists
if (!localStorage["transactions"]) {
    localStorage.setItem("transactions", JSON.stringify([]));
}

let transactionsArray = JSON.parse(localStorage["transactions"]);

let allIncome = 0;
let allExpense = 0;

transactionsArray.forEach((transaction) => {
    if (transaction.type == "income") {
        allIncome += parseFloat(transaction.amount);
    } else {
        allExpense += parseFloat(transaction.amount);
    }
});

let totalBalance = allIncome - allExpense;

// Render balances on card
totalIncomeBalance.innerHTML = allIncome.toFixed(2);
totalExpenseBalance.innerHTML = allExpense.toFixed(2);
totalBalanceAmount.innerHTML = totalBalance.toFixed(2);

// render percentages
if (allIncome) {
    incomePercentage.innerHTML = Math.round(calcPercentage(allIncome, allExpense, allIncome)) + "%";
} else {
    incomePercentage.innerHTML = "0%";
}

if (allExpense) {
    expensePercentage.innerHTML =
        Math.round(calcPercentage(allIncome, allExpense, allExpense)) + "%";
} else {
    expensePercentage.innerHTML = "0%";
}

// Render transactions
renderTransactions(transactionsArray, transactionsContainer);
