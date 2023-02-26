function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textlementValue = parseFloat(textElementValueString)
    return textlementValue;
}
function setTextElementValueById(element, newValue) {
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = document.getInputFieldValueById('deposit-field')


    const previousDepositTotal = document.getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})