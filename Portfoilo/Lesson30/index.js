// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = Обратные кавычки позволяют встраивать переменные ${str};

// let name = "Иван";

// // Вставим переменную
// alert( Привет, ${name}! ); // Привет, Иван!

// // Вставим выражение
// alert( результат: ${1 + 2} ); // результат: 3


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object" (1)

// typeof null // "object" (2)

// typeof alert // "function" (3)

// alert( Number(" 123 ") ); // 123
// alert( Number("123z") ); // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) ); // 1
// alert( Number(false) ); // 0

//let body = document.querySelector('body')
//body.insertAdjacentHTML('afterbegin',`
    //<h1>Learning JavaScript</h1>
    //<h1>Learning JavaScript</h1>
    //<button onclick='changeColor()'>Change color</button>
//`)
//let mainHeading = document.querySelector('h1')
//let changeBTN = document.querySelector('button')

//mainHeading.style.color = 'blue'

//function changeColor () {
    //let red = Math.round(Math.random()*255)
    // alert(red)
    //mainHeading.style.color = `rgb(${red},21,211)`
    //mainHeading.style.fontSize = '50px'
    //changeBTN.innerHTML = mainHeading.style.color
//}


function begin1() {
    let a = Number(prompt('input mumber'))
    alert(`Perimetr = ${a**2}`)
}

function begin3() {
    let a = Number(prompt('input mumber'))
    let b = Number(prompt('input mumber'))
    alert(`Perimetr = ${2*(a+b)}`)
}

function begin3_1() {
    let a = Number(prompt('input mumber'))
    let b = Number(prompt('input mumber'))
    alert(`Perimetr = ${a*b}`)
}

function begin4() {
    let L = Number(prompt('input mumber non-zero number'))
    alert(`d = ${L/3.14}`)
}

function begin6() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    let c = Number(prompt('input mumber non-zero number'))
    alert(`V = ${a*b*c}`)
}

function begin6_1() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    let c = Number(prompt('input mumber non-zero number'))
    alert(`S = ${2*(a*b+b*c+a*b)}`)
}

function begin8() {
    let a = Number(prompt('input mumber'))
    let b = Number(prompt('input mumber'))
    alert(`Perimetr = ${(a+b)/2}`)
}

function begin11() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    alert(`Perimetr = ${a+b}`)
}

function begin11_1() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    alert(`Perimetr = ${a-b}`)
}

function begin11_2() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    alert(`Perimetr = ${a*b}`)
}

function begin11_3() {
    let a = Number(prompt('input mumber non-zero number'))
    let b = Number(prompt('input mumber non-zero number'))
    alert(`Perimetr = ${a/b}`)
}

function begin16() {
    let a = Number(prompt('input mumber '))
    let b = Number(prompt('input mumber '))
    let x = Number(prompt('input mumber non-zero number'))
    alert(`Perimetr = ${(a-b)*x}`)
}

function begin20() {
    let x1 = Number(prompt('input mumber non-zero number'))
    let y1 = Number(prompt('input mumber non-zero number'))
    let x2 = Number(prompt('input mumber non-zero number(more than x1)'))
    let y2 = Number(prompt('input mumber non-zero number(more than y1)'))
    alert(`formula = ${((x2-x1)+(y2-y1))**0.5}`)
}

function begin25() {
    let x = Number(prompt('input mumber non-zero number'))
    alert(`y = ${3*x**6-6*x**2-7}`)
}

function begin32() {
    let T = Number(prompt('input mumber non-zero number'))
    alert(`Tf = ${(T+32)*5/9}`)
}

function begin33() {
    let A = Number(prompt('input mumber non-zero number(price)'))
    let Y = Number(prompt('input mumber non-zero number(weight in kg)'))
    alert(`Weight = ${A+(A*Y)}`)
}

