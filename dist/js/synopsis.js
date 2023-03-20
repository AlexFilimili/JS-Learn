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

/* оператор И */
const 
    isChecked = true,
    isClose = true;
console.log(isChecked && isClose); /* true, так как оба условия соблюдены */

/* оператор ИЛИ */
const 
    isChecked = true,
    isClose = false;
console.log(isChecked || !isClose); /* true, так как оба условия соблюдены c помощью оператора отрицания */

