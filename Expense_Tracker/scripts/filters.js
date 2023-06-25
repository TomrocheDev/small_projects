function filterIncome(array, container) {
    container.innerHTML = "";
    array.forEach((element) => {
        if (element.type == "income") {
            let newTransaction = document.createElement("div");
            newTransaction.setAttribute("class", "transaction-item item-income");
            newTransaction.innerHTML = `
                <div class="transaction-left-container">
                    <div class="percentage-icon">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div class="transaction-item-title-date">
                        <div class="transaction-title">${element.description}</div>
                        <div class="transaction-date">${element.date}</div>
                    </div>
                </div>
                <div class="transaction-amount">
                    <span class="transaction-actual-amount">$${element.amount}</span>
                </div>
                <i class="fa-regular fa-trash-can delete-trans"></i>
            `;
            container.append(newTransaction);
        }
    });
}

function filterExpense(array, container) {
    container.innerHTML = "";
    array.forEach((element) => {
        if (element.type == "expense") {
            let newTransaction = document.createElement("div");
            newTransaction.setAttribute("class", "transaction-item item-expense");
            newTransaction.innerHTML = `
            <div class="transaction-left-container">
                <div class="percentage-icon second">
                    <i class="fa-solid fa-arrow-trend-down"></i>
                </div>
                <div class="transaction-item-title-date">
                    <div class="transaction-title">${element.description}</div>
                    <div class="transaction-date">${element.date}</div>
                </div>
            </div>
            <div class="transaction-amount">
                <span class="transaction-actual-amount">$${element.amount}</span>
            </div>
            <i class="fa-regular fa-trash-can delete-trans"></i>
            `;
            container.append(newTransaction);
        }
    });
}

function filter() {
    let filterValue = document.getElementById("sort-dropdown").value;
    switch (filterValue) {
        case "income":
            filterIncome(transactionsArray, transactionsContainer);
            break;
        case "expense":
            filterExpense(transactionsArray, transactionsContainer);
            break;
    }
}
