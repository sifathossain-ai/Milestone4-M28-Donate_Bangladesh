// First Donation Js code.

document.getElementById('btn-donation-1').addEventListener('click', function(){
    console.log('Hello World!');

    const inputValue1 = getInputValue('input-value-1');
    const textValue1 = getTextValue('text-value-1');

    const textValueMain = getTextValue('text-value-main');
    // console.log(inputValue1, textValue1, textValueMain);
    
    if(textValueMain > inputValue1){
        document.getElementById('text-value-1').innerText = inputValue1 + textValue1;
        document.getElementById('text-value-main').innerText = textValueMain - inputValue1;
        document.getElementById('input-value-1').value = '';
    }
    else{
        alert('Your have not enough money in your account.')
    }
})