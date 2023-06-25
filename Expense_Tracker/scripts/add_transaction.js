// Open up screen for adding transaction when "add" btn is clicked
// Declare variables
const addBtn = document.getElementById("add-transaction-btn");
const saveBtn = document.getElementById("save-transaction");
const cancelBtn = document.getElementById("cancel-transaction");
const transactionForm = document.querySelector(".add-transaction-form");

// Open transaction screen when "Add" button is clicked
addBtn.addEventListener("click", () => {
    transactionForm.classList.add("show-container");
});

// Close transaction screen when "Close" button is clicked
cancelBtn.addEventListener("click", () => {
    transactionForm.classList.remove("show-container");
});

// Save form data to local storage
saveBtn.addEventListener("click", () => {
    let nameValue = document.getElementById("form-desc").value;
    let amountValue = document.getElementById("form-amount").value;
    let dateValue = document.getElementById("form-date").value;

    // Check which radio button is selected
    let radioIncome = document.getElementById("radio-income");
    let radioExpense = document.getElementById("radio-expense");
    let radioValue;

    if (radioIncome.checked) {
        radioValue = "income";
    } else if (radioExpense.checked) {
        radioValue = "expense";
    }

    // Create an object to save
    let transactionObject = {
        description: nameValue,
        amount: amountValue,
        type: radioValue,
        date: dateValue,
    };

    // Save new storage data
    let transactionsArray = JSON.parse(localStorage["transactions"]);
    transactionsArray.unshift(transactionObject);
    localStorage.setItem("transactions", JSON.stringify(transactionsArray));

    // Close transaction screen when transaction is added
    transactionForm.classList.remove("show-container");

    location.reload();
});
