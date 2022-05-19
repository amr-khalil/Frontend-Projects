const count = document.querySelector('.count');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const resetBtn = document.querySelector('.reset');

addBtn.addEventListener('click', ()=> {
    count.innerHTML++;
});

subtractBtn.addEventListener('click', ()=> {
    count.innerHTML--;
});

resetBtn.addEventListener('click', ()=> {
    count.innerHTML = 0;
});