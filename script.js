let calcInput;

// Numbers

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener('click', () => {
    
    calcInput = oneBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener('click', () => {
    
    calcInput = twoBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener('click', () => {
    
    calcInput = threeBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener('click', () => {
    
    calcInput = fourBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener('click', () => {
    
    calcInput = fiveBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener('click', () => {
    
    calcInput = sixBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener('click', () => {
    
    calcInput = sevenBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener('click', () => {
    
    calcInput = eightBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener('click', () => {
    
    calcInput = nineBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener('click', () => {
    
    calcInput = zeroBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});


// Operators

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
    
    display.value = '';
    console.log(calcInput);
    
});

const undoBtn = document.querySelector("#undo");
undoBtn.addEventListener('click', () => {
    
    display.value = display.value.slice(0,-1);
    console.log(calcInput);
    
});

const divBtn = document.querySelector("#div");
divBtn.addEventListener('click', () => {
    
    calcInput = divBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const multBtn = document.querySelector("#mult");
multBtn.addEventListener('click', () => {
    
    calcInput = multBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const minBtn = document.querySelector("#min");
minBtn.addEventListener('click', () => {
    
    calcInput = minBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {
    
    calcInput = addBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const pointBtn = document.querySelector("#point");
pointBtn.addEventListener('click', () => {
    
    calcInput = pointBtn.value;
    display.value += calcInput;
    console.log(calcInput);
    
});

const equalBtn = document.querySelector("#equal");

const display = document.getElementById('display');

