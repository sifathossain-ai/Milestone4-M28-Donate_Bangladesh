// Return input value

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);
}

// Return text value

function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}