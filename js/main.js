const btnMultiply = document.querySelector('.multiply');
const btnMDivide = document.querySelector('.divide');
const originalResult = document.querySelector('.original');
const newResult = document.querySelector('.new');


let $score;


const add = (a, b) => {
    $score = a + b;
    originalResult.innerHTML = $score;
};

const multiply = () => {
    const result = $score * 2;
    newResult.innerText = result;
};

const divide = () => {
    const result = $score / 2;
    newResult.innerText = result;
};


btnMultiply.addEventListener('click', multiply);
btnMDivide.addEventListener('click', divide);

add(4, 4)
console.log($score);

