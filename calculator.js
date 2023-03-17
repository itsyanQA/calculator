const auditElement = document.querySelector(".audit");
const OPERATORS = ["/", "*", "-", "+"];

function addEventListeners() {
    const inputButtonsElements = document.querySelectorAll(".buttons-section>div>button")
    inputButtonsElements.forEach(item => {
        item.addEventListener('click', () => {
            auditElement.setAttribute = auditElement.value += concatAudit(item);
        })
    })
}

function concatAudit(buttonElement) {
    if (isFirstCharIsOperator(buttonElement)) {
        alert("Invalid format used");
        return "";

    } else if (isOperatorComeAfterOperator(buttonElement)) {
        alert("Invalid format used");
        return "";

    } else if (isEqualSign(buttonElement)) {
        return "";

    } else if (isCharLimitExceeded()) {
        alert("Can't enter more than 22 characters")
        return ""
    }
    return buttonElement.innerText;
}

function isFirstCharIsOperator(buttonElement) {
    return auditElement.value.length == 0 &&
         OPERATORS.includes(buttonElement.innerText) &&
          isNaN(buttonElement.innerText[0])
}

function isEqualSign(buttonElement) {
    return buttonElement.innerText == "="
}

function isOperatorComeAfterOperator(buttonElement) {
    return OPERATORS.includes(auditElement.value.slice(-1)) && OPERATORS.includes(buttonElement.innerText)
}

function isCharLimitExceeded() {
    return auditElement.value.length == 22
}

function clearAudit() {
    auditElement.value = "";
}

function deleteValue() {
    auditElement.value = auditElement.value.slice(0, -1);
}

function getResult() {
    let result  = evaluateExpression();
    auditElement.value = result;
}

function evaluateExpression() {
    let expression = auditElement.value;
    let isExpressionValid = isExpressionValidValidation(expression);
    if (isExpressionValid) {
        let result = eval(expression);
        auditElement.value = result;
        return result
    }
    return "";
}

function isExpressionValidValidation(expression) {
    if (expression?.slice(-2) == "/0") {
        alert("Cant divide by 0")
        return
    } else if (OPERATORS.includes(expression.slice(-1))) {
        alert("Invalid format used")
        return
    } else if (expression == "") {
        return
    }
    return true
}

addEventListeners();