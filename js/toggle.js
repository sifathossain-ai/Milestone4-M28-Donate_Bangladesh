const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById('donation').classList.remove('hidden');
    
    btnDonation.style.background = 'yellow';
    btnHistory.style.background = 'none'
});

document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById('history').classList.remove('hidden');

    btnHistory.style.background = 'yellow';
    btnDonation.style.background = 'none';
})