// First Donation Js code.

document.getElementById('btn-donation-1').addEventListener('click', function(){
    // console.log('Hello World!');

    const inputValue1 = getInputValue('input-value-1');
    const textValue1 = getTextValue('text-value-1');

    const textValueMain = getTextValue('text-value-main');
    // console.log(inputValue1, textValue1, textValueMain);
    
    if(textValueMain >= inputValue1){
        document.getElementById('text-value-1').innerText = inputValue1 + textValue1;
        document.getElementById('text-value-main').innerText = textValueMain - inputValue1;
        document.getElementById('input-value-1').value = '';


        // Add History Section;

        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.classList.add('mb-4');
        const d = new Date();

        div.innerHTML = `
            <h3 class = "text-xl font-bold mb-4"> ${inputValue1 + textValue1} Tk Donated for Flood at Noakhali, Bangladesh </h4>
            <p class = "text-gray-500"> ${d} </>
        `
        document.getElementById('history').appendChild(div);
    }
    else{
        alert('Your have not enough money in your account.')
    }
});

// Second Donation JS code

document.getElementById('btn-donation-2').addEventListener('click', function(){
    const inputValue2 = getInputValue('input-value-2');
    const textValue2 = getTextValue('text-value-2');

    const textValueMain = getTextValue('text-value-main');
    // console.log(inputValue2, textValue2, textValueMain);
    
    if(textValueMain >= inputValue2){
        document.getElementById('text-value-2').innerText = textValue2 + inputValue2;
        document.getElementById('text-value-main').innerText = textValueMain - inputValue2;

        document.getElementById('input-value-2').value = '';

        // Add History Section;

        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.classList.add('mb-4');
        const d = new Date();

        div.innerHTML = `
            <h3 class = "text-xl font-bold mb-4"> ${inputValue2 + textValue2} Tk Donated for Flood Relief in Feni,Bangladesh </h4>
            <p class = "text-gray-500"> ${d} </>
        `
        document.getElementById('history').appendChild(div);
    }
    else{
        alert('Your have not enough money in your account.');
    }
});

// Third Donation JS code

document.getElementById('btn-donation-3').addEventListener('click', function(){
    const inputValue3 = getInputValue('input-value-3');
    const textValue3 = getTextValue('text-value-3');

    const textValueMain = getTextValue('text-value-main');
    // console.log(inputValue3, textValue3, textValueMain);
    
    if(textValueMain >= inputValue3){
        document.getElementById('text-value-3').innerText = textValue3 + inputValue3;
        document.getElementById('text-value-main').innerText = textValueMain - inputValue3;

        document.getElementById('input-value-3').value = '';

        // Add History Section;

        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.classList.add('mb-4');
        const d = new Date();

        div.innerHTML = `
            <h3 class = "text-xl font-bold mb-4"> ${inputValue3 + textValue3} Tk Donated for Injured in the Quota Movement </h4>
            <p class = "text-gray-500"> ${d} </>
        `
        document.getElementById('history').appendChild(div);
    }
    else{
        alert('Your have not enough money in your account.');
    }
});