function checkLength(value) {
    if (value.length >= 10) {
        LENGTH.classList.add("completed");
        return (lengthCheck = true);
    } else {
        LENGTH.classList.remove("completed");
        return (lengthCheck = false);
    }
}

function uppercaseCheckFunc(value) {
    if (/[A-Z]/.test(value)) {
        UPPERCASE.classList.add("completed");
        return (uppercaseCheck = true);
    } else {
        UPPERCASE.classList.remove("completed");
        return (uppercaseCheck = false);
    }
}

function lowercaseCheckFunc(value) {
    if (/[a-z]/.test(value)) {
        LOWERCASE.classList.add("completed");
        return (lowercaseCheck = true);
    } else {
        LOWERCASE.classList.remove("completed");
        return (lowercaseCheck = false);
    }
}

function specialCheckFunc(value) {
    if (SPECIALCHARS.test(value) || /\d/.test(value)) {
        NUMBERORSPECIAL.classList.add("completed");
        return (specialCheck = true);
    } else {
        NUMBERORSPECIAL.classList.remove("completed");
        return (specialCheck = false);
    }
}

const PASSWORDINPUT = document.querySelector("input");
const PROCEEDBTN = document.querySelector(".fa-angles-right");
const PROCEEDBTNCONTAINER = document.querySelector(".proceed-btn-container");
const LENGTH = document.querySelector(".length");
const UPPERCASE = document.querySelector(".uppercase");
const LOWERCASE = document.querySelector(".lowercase");
const NUMBERORSPECIAL = document.querySelector(".number");
const SPECIALCHARS = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

let lengthCheck = false;
let lowercaseCheck = false;
let uppercaseCheck = false;
let specialCheck = false;

PASSWORDINPUT.addEventListener("keyup", () => {
    let value = PASSWORDINPUT.value;

    checkLength(value);
    uppercaseCheckFunc(value);
    lowercaseCheckFunc(value);
    specialCheckFunc(value);

    if (lengthCheck && lowercaseCheck && uppercaseCheck && specialCheck) {
        alert("This is a strong password!");
    }
});
