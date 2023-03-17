const auditElement = document.querySelector(".audit");
const resultElement = document.querySelector(".result");

function addEventListeners() {
    // const auditElement = document.querySelector(".audit")
    const inputButtonsElements = document.querySelectorAll(".buttons-section>div>button")
    inputButtonsElements.forEach(item => {
        item.addEventListener('click', () => {
            auditElement.setAttribute = auditElement.value += item.innerText;
            console.log(`${item}`)
        })
    })
}

function clearAudit() {
    console.log("clearing audit")
    auditElement.value = "";
    resultElement.value = "";
}

function deleteValue() {
    console.log(`deleting value: ${auditElement.value.slice(-1)}`)
    auditElement.value = auditElement.value.slice(0, -1);
}

function getResult() {
    let result = resultElement.value = evaluateExpression();
    getResult.value = result;
}

function evaluateExpression() {
    expression = auditElement.value;
    return eval(expression);
}

addEventListeners();