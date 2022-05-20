// Select container
const container = document.querySelector('.container');

// Select text
const hexColorText = document.querySelector('.hex-color');
const tooltipText = document.querySelector('.tooltiptext');

// Select buttons
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');

// Global varible
var hexColor;

// Functions 
// function to generate the hex color
function generateColor(){
    let color = Math.random().toString(16).substring(2,8);
    return '#' + color.toUpperCase()
}

// Function to copy the hex color
function copyColor(color){
    navigator.clipboard.writeText(color);
    tooltipText.innerHTML = 'Copied: ' + color;

    // alert("Copied the text: " + color);
}

// Manipulate DOM 
generateBtn.addEventListener('click', ()=> {
    hexColor = generateColor(); 
    hexColorText.innerHTML =  hexColor;
    container.style.backgroundColor = hexColor;
});

copyBtn.addEventListener('click', ()=>{
    copyColor(hexColor);
});

function func(){
    copyBtn.addEventListener( 'mouseout', ()=>{
        setTimeout(()=>{tooltipText.innerHTML =  "Copy to clipboard";}, 2000)
    });
}

func();

