const validations = {
    "amount": {
        keyPress: /\d|\./,
        pattern: /[1-9]\d+(\.\d{2})?/
    },
    "card": {
        keyPress: /\d/,
        pattern: /\d{4}\s\d{4}\s\d{4}\s\d{4}/,
        max: 19,
        autocomplete: function (event) {
            if (!["deleteContentBackward", "deleteContentForward"].includes(event.inputType) &&
                [4, 9, 14].includes(event.target.value.length)) { event.target.value += " "; }
        }
    },
    "name": {
        keyPress: /[A-Za-z]|\s/,
        pattern: /[A-Za-z]{3,}\s[A-Za-z]{3,}/,
    },
    "expiration": {
        keyPress: /\d|\//,
        pattern: /(0[1-9]|1[0-2])\/\d{2}/,
        max: 5,
        autocomplete: function (event) {
            if (!["deleteContentBackward", "deleteContentForward"].includes(event.inputType) &&
                event.target.value.length == 2) { event.target.value += "/"; }
        }
    },
    "csv": {
        keyPress: /\d/,
        pattern: /\d{3}/,
        max: 3
    },
}

const keyValidation = (event) => {
    const val = validations[event.target.id];

    // Comprueba cada input con el keyPress, si no coincide o supera el máximo, hace un slice del texto actual quitándole el último carácter
    if (!val.keyPress.test(event.target.value[event.target.value.length - 1]) ||
        (val.max && (event.target.value.length > val.max))) {
        event.target.value = event.target.value.slice(0, -1);
    }

    if (val.autocomplete) {
        val.autocomplete(event);
    }
}

const patternValidation = (event) => {
    const val = validations[event.target.id];
    let div = document.querySelector("#" + event.target.id + "Error");

    if (!val.pattern.test(event.target.value) ||
        ((event.target.id == "expiration") && !checkExpirationDate(event.target.value))) {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
    } else {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
    }
}

const checkExpirationDate = (value) => {
    let fecha = value.split("/");
    const today = new Date();
    let valid = true;

    if (fecha[0] < 1 || fecha[0] > 12) { valid = false; }

    if (fecha[1] <= (today.getYear() - 100) &&
        fecha[0] < (today.getMonth() + 1)) { valid = false; }

    return valid
}

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", keyValidation);
    input.addEventListener("blur", patternValidation);
})