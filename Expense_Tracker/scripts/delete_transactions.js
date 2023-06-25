function clearLocalStorage() {
    let deleteCheck = prompt(
        "Are you sure you want to delete all transactions? (if so, type: 'delete')"
    );

    if (deleteCheck == "delete") {
        localStorage.clear();
        location.reload();
        alert("All transactions are deleted.");
    } else {
        alert("Transactions are not deleted.");
    }
}

const allDeleteBtns = Array.from(document.querySelectorAll(".delete-trans"));

transactionsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-trans")) {
        // Remove index from local storage and save it
        transactionsArray.splice(allDeleteBtns.indexOf(event.target), 1);
        localStorage.setItem("transactions", JSON.stringify(transactionsArray));

        // Reload page
        location.reload();
    }
});
