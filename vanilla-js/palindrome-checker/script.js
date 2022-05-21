// Variables
const checkBtn = document.querySelector('.check-btn');
const infoBtn = document.querySelector('.info-btn');
const closeBtn = document.querySelector('.close-btn');

const modal = document.querySelector('.modal');
const inputText = document.querySelector('.input-text');
const resultText = document.querySelector('.result');

checkBtn.addEventListener('click', checkPalindorme);
infoBtn.addEventListener('click', showInfo);
closeBtn.addEventListener('click', closeIt);
modal.addEventListener('click', closeIt);

function checkPalindorme() {
    const word = inputText.value.toLowerCase();
    // Remove puncitation and spaces
    const cleanWord = word.replace(/[^\w]/g, '');

    if (!cleanWord ){
        resultText.innerHTML = 'Please Enter a Word!';
    }
    else if (cleanWord && cleanWord === cleanWord.split('').reverse().join('')) {
        resultText.innerHTML = `Yes, ${word} is a Palindrome.`;
    }
     else {
        resultText.innerHTML = `No, ${word} is Not a Palindrome.`;
    }

}

function showInfo(e){
    e.preventDefault();
    modal.style.display = 'block';
}

function closeIt() {
    modal.style.display = 'none';
}