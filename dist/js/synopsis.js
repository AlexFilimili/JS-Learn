'use strict';

let a = 3;
console.log(a);

let number = 15;
/* const leftBorderWidth = 8; */

number = 5;
console.log(number);

//объект, с элементами - ключ: значение
const obj = {
    name: 'Sasha', //  ключ: значение
    age: 30,
    isMarried: true
};

console.log(obj.age);
console.log(obj['name']);

//массив (элементы строго по порядку)
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);



// различия объекта и массива
const arr2 = ['a', 'b', 'c'];

arr2[10] = 'new massiveObject';
console.log(arr2[10]);

const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};

arrObj.b = 'new object';     // кладём в массив новую переменную 'b'
//или 
arrObj['b'] = 'new object'; 

//вызов
console.log(arrObj['b']); //вызываем new object через свойство - вызываем строку  
//или
console.log(arrObj.b);   //вызываем new object через переменную
console.log(arr2[1]);      //вызываем b из объекта



const answer = prompt('Where are Y from', ''); /* тип данных всегда будет "строка", даже если введены цифры */
console.log(typeof(answer)); /* ВСЯ ИНФОРМАЦИЯ, КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗАВОТЕЛЯ, БУДЕТ В ВИДЕ СТРОК */

/* взаимодействие с полльзователем */
const answers = [];
answers[0] = prompt('what is your name?', '');
answers[1] = prompt('what is your surname?', '');
answers[2] = prompt('how old are you?', '');

document.write(answers);

/* Интерполяция */
const category = 'corporate';
console.log(`https://aleksandrfilimonov.ru/${category}/about`);

const user = 'Sasha';
alert(`Hello, ${user}`);

/* операторы */
console.log('Sasha' + ' ' + 'Filimonov');
console.log(5 + +'10');

let incr = 5,
    decr = 8;
/* префиксная форма меняет редультат в моменте и сразу передает его дальше */
console.log(++incr);
console.log(--decr);

/* постфиксная форма не меняет результат в моменте, а меняет его после свершения операции */
console.log(incr++);
console.log(decr--);

console.log(5%2); /* взятие остатка */
console.log(2+8 === 10); /* true,так как строгое равенство*/
console.log(2+8 == '10');/* true,так как не строгое равенство*/

/* оператор И (ВОЗВРАЩАЕТ ПЕРВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ, КОД ДАЛЬШЕ НЕ ИДЁТ)*/
const 
    isChecked = true,
    isClose = true;
console.log(isChecked && isClose); /* true, так как оба условия соблюдены */

/* Условия, при котором ингредиенты собраны для приготовления супа */
const 
    beans = true,
    cilantro = true,
    tomatoes = 3,
    zucchini = true,
    tomatoPaste = true,
    carrots = true,
    sweetBellPepperRed = 2,
    sweetBellPepperYellow = 0;

    if ((sweetBellPepperRed === 2 || sweetBellPepperYellow === 2) && beans && cilantro && tomatoes === 3 && zucchini && tomatoPaste && carrots) {
        console.log('soup is ready');
    }
    else {
        console.log('We keep on shopping');
    }
    
/* оператор ИЛИ (ВОЗВРАЩАЕТ ПЕРВОЕ ИСТИННОЕ ЗНАЧЕНИЕ, КОД ДАЛЬШЕ НЕ ИДЁТ) */
const 
    isChecked2 = true,
    isClose2 = false;
console.log(isChecked2 || !isClose2); /* true, так как оба условия соблюдены c помощью оператора отрицания */

/* Условия */
const num = 50;
if (num < 50) {
    console.log('not much');
}
else if (num > 50) {
    console.log('much');
}
else {
    console.log('matched');
}
/* Тоже самое, но с тернарным оператором */
(num === 50) ? console.log('matched') : console.log('Error');

/* А теперь через switch (строго стравнение) */

switch (num) {
    case 30:
        console.log('not much');        
            break;
    case 60:
        console.log('much');        
            break;
    case 50:
        console.log('matched');        
            break;
    default:
        console.log('try it next time');
            break;
}

/* циклы */
let num3 = 50;
while (num3 < 55) {
    console.log(num3);
    num3++;
}
/* или так, работать будет точно также */
let num33 = 50;
do {
    console.log(num33);
    num33++;
}
while (num33 < 55);

/* базовый и фундаментальный принцип програмирования */
let num4 = 50;
for (let i = 1; i < 12; i++) {
    console.log(num4);
    num4++;
}
/* прерываем цикл */
let num5 = 50;
for (let i = 1; i < 12; i++) {
    console.log(num5);
    num5++;
    if (num5 === 52) break;
}

/* пропустим часть цикла */

for (let i = 1; i < 12; i++) {    
    if (i >= 3 && i<=9 ) {
        continue;
    }
    console.log(i);
}

/* вложенный цикл, рисуем пирамидку */
let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';   
}
console.log(result);

/* выводим четные числа */
for (let i = 2; i <= 10; i++) {    
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

/* выводим нечетные через WHILE */
let i = 2;
while (i < 16) {    
    i++;
    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}

/* записываем в массив цифры от 5 до 10 */
const arrayOfNumbers = [];
let numb = 5;
let j11 = 0;
let i11 = 0;

do {
    arrayOfNumbers[j11] = numb;
    i11++;
    j11++;
    numb++;
}
while (i11 <= 5);
  
console.log(arrayOfNumbers);

/* а теперь через For */
const arrayOfNumbers22 = [];
let num22 = 5;
let j22 = 0;
for (let i = 0; i <=5; i++) {
    arrayOfNumbers[j22] = num22;
    num22++;
    j22++;
}
console.log(arrayOfNumbers22);

/* перекладываем из одного массива в другой */
function massive() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    let j = 0; 
    let i = 0;

    do {
        result[j] = arr[i];
        i++;
        j++;
        if (j >= arr.length) {
            break;
        }
    }
    while (i <= arr.length);
    console.log(result);

}
 massive();

 /* изменяем массив с разными данными */
function massive2() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let length = data.length;

    for (let i = 0; i < length; i++) {
        let a = data[i];
        let aMod;   
        if ( typeof a == 'number') {
            aMod = a * 2;
        } 
        else if ( typeof a == 'string') {
            aMod = `${a} - done`;
        } 
        data[i] = aMod;
    }
    console.log(data);
}
massive2();

/* разворачиваем массив */ 

function massive3 {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let length = data.length;
    let j = 4;

    for (let i = 0; i < length; i++) {
        let dataD = data[i];
        result[j] = dataD;
        j--; 
    }
    console.log(result);
}
massive3();













