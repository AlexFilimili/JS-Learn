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

function massive3() {
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

/* функции */
let num7 = 7;
function showMessege(text) {
    console.log(text);
    console.log(num7);
}
showMessege('Hi San');


function calc(a, b) {
    return (a + b); /* после return функция не идёт */
}
console.log(calc(2, 3));
console.log(calc(12, 4));

/* записываем в переменную результат функции */
function ret() { /* function declaration, код видит с самого начала, еще до того, как до нее доходит */
    let num = 77;

    //

    return num;
}
let anotherNum = ret();
console.log(anotherNum);

const logger = function() { /* function expansion, код видит только тогда, когда до нее доходит */
    console.log('its a function expansion, biaaatch');
};
logger();

/* стрелочные функции */
const plus = (a, b) => a + b;
plus();

/* аргументы функций + return*/

const usdCurr = 77;
const eurCurr = 83;
function convert(amount, curr) {
    return (curr * amount); 
}
convert(350, usdCurr);
convert(350, eurCurr);

let promoDiscount = 0.9;
function discount (result) {
    console.log(result * promoDiscount);
}
const res = convert(350, eurCurr); /* создаем промежуточную переменную */
discount(res);

/* выводим четные до 8 */
function test() {
    for (i = 0; i < 11; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
        if (i === 8) return; /* в этом случае возвращается undefined, так как retur не задан */
    }
}
test();

/* возвращаем строку с приветствием */
function sayHello(name) {
    return (`Hello, ${name}`);
}
const userName = sayHello('Yulia');
console.log(userName);

/* возвращаем массив */
function returnNeighboringNumbers(a) {
    let massive = [];
    massive[0] = a - 1;
    massive[1] = a;
    massive[2] = a + 1;

    return massive;    
}
console.log(returnNeighboringNumbers(7));

/* складываем числа в массив, достаем и располагаем их в строку */
function getMathResult(a, b) {
    let massive = [];
    let resultString = '';
    for (let i = 0; i < b; i++) {
        let result = a * (i + 1);
        massive[i] = result;        
        if (i == b - 1) {
            resultString += massive[i];
        }
        else {
            resultString += massive[i] + '---';            
        }    
    }
    if (b <= 0 || isNaN(b)) return a;
    else return resultString;    
}
console.log(getMathResult(10, 5));

/* методы */

/* меняем регистр */
let str = 'first pRactice';
console.log(str.toLocaleUpperCase()); /* исходник не меняется */
console.log(str.toLowerCase());
console.log(str);   

/* ищем кусочек строки */
const fruit = 'some fruit';
console.log(fruit.indexOf('o')); 

/* вырезаем кусочки строки */
const logg = 'fiverr and UpWork';
console.log(logg.slice(7, 11));
/* или */
console.log(logg.substring(7, 11));
console.log(logg.substr(7, 3)); /* второй аргумент сообщает сколько символов нужно образать */

/* округляем до ближайшего целого */
const num8 = 15.4;
console.log(Math.round(num8));

/* преобразуем число из строки в числовой тип данных, округляя до ближайшего целого */
const width = '15.4px';
console.log(parseInt(width));

const width2 = '15.4px';
console.log(parseFloat(width2)); /* тоже самое, только не округляя */

/* вычисляем площадь и объем куба */
function lessonFunction1() {
    function cubeArea(a) {        
    if (Number.isInteger(a) === true && a > 0) {
        let cubeArea = 6 * (a * a);
        let cubeVolume = a * a * a;
        console.log(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`);
        return(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`);            
    }
    else if (a <= 0 || Number.isInteger(a) === false) { 
        console.log('При вычислении произошла ошибка');
        return ('При вычислении произошла ошибка');
    }
}
cubeArea(5);
}
lessonFunction1();

/* выводим номер купэ в завимости от места */
function getCoupeNumber(seatNum) {
    if (seatNum === 0 || seatNum > 36) alert('Таких мест в вагоне не существует');
    else if (seatNum < 0 || isNaN(seatNum) === true || Number.isInteger(seatNum) === false) {
        alert('Ошибка. Проверьте правильность введенного номера места');
    }  
    else if (seatNum > 0 && seatNum < 37) console.log(Math.ceil(seatNum / 4));
/*     else if (seatNum <= 4) console.log(1);
    else if (seatNum > 4 && seatNum < 9) console.log(2); 
    else if (seatNum > 8 && seatNum < 13) console.log(3); 
    else if (seatNum > 12 && seatNum < 17) console.log(4); 
    else if (seatNum > 16 && seatNum < 21) console.log(5); 
    else if (seatNum > 20 && seatNum < 25) console.log(6); 
    else if (seatNum > 24 && seatNum < 29) console.log(7); 
    else if (seatNum > 28 && seatNum < 33) console.log(8); 
    else if (seatNum > 32 && seatNum < 37) console.log(9);  */
}
getCoupeNumber(20);

/* преобразуем минуты в формат часов */
function getTimeFromMinutes(minutes) {
    if (Number.isInteger(minutes) === false || isNaN(minutes) === true || minutes < 0) {
        console.log('Ошибка, проверьте данные');
    }
    else if (minutes >= 0 && minutes <= 600) {
        let hour = minutes / 60;
        let minute = minutes % 60;
        let minRemainder = minute % 10;

        if ((minutes >= 0 && minutes < 60 || minutes >= 300 && minutes < 600) && /* 0-60, 301-600 */
        (minRemainder >= 5 || minRemainder === 0 )) {
            console.log(`Это ${Math.floor(hour)} часов и ${minute} минут`);            
        }
        else if ((minutes >= 0 && minutes < 60 || minutes > 300 && minutes < 600) &&
        (minRemainder <= 5 && minRemainder > 0)) {
            console.log(`Это ${Math.floor(hour)} часов и ${minute} минуты`);            
        }

        else if (minutes > 119 && minutes < 300) { /* 120-299 */
            console.log(`Это ${Math.floor(hour)} часа и ${minute} минут`);            
        }
        else if (minutes >= 60 && minutes < 120) { /* 119-300 */
            console.log(`Это ${Math.floor(hour)} час и ${minute} минут`);            
        }
    }
}
getTimeFromMinutes(60);

/* работаем с типами аргументов */
function findMaxNumber(a, b, c, d) {
    let num = Math.max(a, b, c, d);
    if (num === Infinity || Number.isNaN(num) === true || 
        typeof d !== 'number' || typeof c !== 'number' || typeof b !== 'number' || typeof a !== 'number' ) {
        console.log(0);
        return 0;
    }
    else {
        console.log(num);
        return num;

    }
}
findMaxNumber(1, 5, '6', '10');

/* callback функции, должны выполнятся в определенном порядке */
function LearnJs(lang, callback) {
    console.log(`i learn ${lang}`);
    callback();
}

function done() {
    console.log('I`ve learned this lesson');
}
LearnJs('JavaScript', done);

/* деструктуризация объектов */
const options = {
    name: 'test',
    width: 1368,
    height: 900,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { /* СОЗДАЕМ МЕТОД ВНУТРИ ОБЪЕКТА */
        console.log('my first method');
    } 
};
options.makeTest(); /* вызываем фукнцию из объекта */
const {border, bg} = options.colors; /* вытаскиваем из вложеннго объекта значения в общий поток */
console.log(bg + ', ' + border);

console.log(options['colors']['border']); /* обращаемся к вложенному объекту */
//удаляем ключ из объекта
/* delete options.name;
console.log(options); */
let counter = 0; /* считаем сколько ключей нашли */
for (let key in options) {    
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
        console.log(`свойство ${key} имеет значение ${options[key][i]}` );
        counter++;
        }
    }
    else {
        console.log(`свойство ${key} имеет значение ${options[key]}` );
        counter++;
    }
}
console.log(counter); 
console.log(Object.keys(options).length); /* получаем количество ключей в объекте 1го уровня */

const arr3 = [1, 2, 4, 6, 8];
arr3.pop(); /* удаляет последний элемент массива */
arr3.push(10); /* добавляет элемент в конец массива */
arr3.forEach(function(i, item, arr3) {
    console.log(`${i}: значение ${item} внутри массива ${arr3}`); /* перебор элементов массива методом */
});


console.log(arr3);

for (let value of arr3) { /* перебор элементов массива */
    console.log(value);
}

/* собираем в массив данные из строчки через определенный разделитель */
const str2 = prompt('', '');
const products = str2.split(', ');
console.log(products);
console.log(products.join('; ')); /* склеиваем обратно в строку, но через ';' */
console.log(products.sort()); /* сортируем в алфавитном порядке СТРОКИ*/

/* сортируем ЧИСЛА в массиве по возрастанию */
const arr4 = [1, 22, 14, 6, 8];
function compareNum(a, b) {
    return a - b;
}
arr4.sort(compareNum);
console.log(arr4);

/* правильно копируем элементы объекта и сам объект */
function copy(mainObj) {
    let copyObj = {};
    let key;
    for (key in mainObj) {        
        copyObj[key] = mainObj[key]; 
    }
    return copyObj;
}
/* ПРИМЕР */
const numbers = {
    a: 3,
    b: 12,
    c: {
        d: 14,
        f: 5
    }
};

const newNumbers = copy(numbers);
newNumbers.b = 0;

console.log(newNumbers);
console.log(numbers);

const arr5 = {
    g: 55,
    l: 112
};
Object.assign(newNumbers, arr5);
console.log(newNumbers);  /* НЕЗАВИСИМАЯ КОПИЯ ОБЪЕКТА */

/* СОЗДАЕМ КЛОН ОБЪЕКТА */
const clone = Object.assign({}, arr5);
clone.l = 0;
console.log(clone);

/* СОЗДАЕМ КЛОН МАССИВА */
const arr10 = [1, 33, 12, 97];
const cloneArr10 = arr10.slice();
cloneArr10[2] = 0;
console.log(arr10);
console.log(cloneArr10);

/* ОБЪЕДИНЯЕМ НЕСКОЛЬКО МАССИВОВ В ОДИН */
const video = ['youtube', 'vimeo', 'TikTok'];
const blogs = ['wordpress', 'livejournal', 'linkdedln'];
const internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

/* РАСПРЕДЕЛЯЕМ ВХОДЯЩИЕ ДАННЫЕ ИЗ МАССИВА */
function log(link, img, text) {
    console.log(link);
    console.log(img);
    console.log(text);

}
const API = ['https', 'bg.png', 'Alexander'];
log(...API);

/* ДЕЛАЕМ КОПИЮ ОБЪЕКТА */
const arr11 = {
    v: 'ball',
    z: 'pool'
};
const copyArr11 = {...arr11};
console.log(copyArr11);

/* ПЕРЕБИРАЕМ ОБЪЕКТ И РАСПОЛОГАЕМ ДАННЫЕ ИЗ НЕГО В СТРОКУ */
const personalPlanPeter = {
    name: '"Peter"',
    age: '"29"',
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '3 month'
    },
    showAgeAndLangs: function() {
        let lang = '';
        let langPpossess;
        let age = personalPlanPeter.age;
        age = age.slice(1, 3);
        for (let key in personalPlanPeter) {
            for (let i in personalPlanPeter[key]) {
                for (let j in personalPlanPeter[key][i]) {
                    if (i === 'languages') {
                        lang += personalPlanPeter.skills.languages[j] + ' ';
                    }                   
                }
            }
        }
        langPpossess = `Мне ${age} и я владею языками: ` + lang.toLocaleUpperCase();
        console.log(langPpossess);
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter); /* ВЫЗЫВАЕМ МЕТОД ИЗ ОБЪЕКТА */

function showProgrammingLangs() {
    const obj = [];
    let resultString = '';
    for (let key in personalPlanPeter) {    
        for (let i in personalPlanPeter[key]) {
            for (let j in personalPlanPeter[key][i]) {
                if (i === 'programmingLangs') {
                    if (j === '') {
                        console.log('');
                    }
                    else {                        
                        obj[j] = `Язык ${j} изучен на ${personalPlanPeter[key][i][j]}`; 
                        resultString += obj[j] + ' ' + '\n';
                        
                    }  
                }                    
            }                
        }
    }
    console.log(resultString);       
       
}
showProgrammingLangs();

/* ВЫВОДИМ ЭЛЕМЕНТЫ ИЗ МАССИВА В СТРОЧКУ */
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(family) {
    let members = '';
    let message;    
    family.forEach(function(member) { 
            members += ' ' + member;
    });  
    if (family.length === 0) {
        message ='Семья пуста'; 
    }
    else {
        message = `Семья состоит из:${members}`;
    }     
console.log(message); 
} 
showFamily(family);

/* ПЕРЕБИРАЕМ МАССИВ МЕТОДОМ */
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings() {
    favoriteCities.forEach(function(city) {
        console.log(city.toLowerCase());
    });    
    
}
standardizeStrings();

/* ПРЕОБРАЗУМЕМ СТРОЧКУ В ОБРАТНЫЙ ПОРЯДОК СИМВОЛОВ ЧЕРЕЗ МАССИВ */
function reverse() {
    const someString = 'This is some strange string';
    if (typeof(someString)  === 'string') {
    const empty = '';
    let arr;
    let arrRev;
    let strRev = '';
    arr = someString.split(empty);
    arrRev = arr.reverse();
    strRev = arrRev.join(empty);
    console.log(strRev);
    }    
    else {
        console.log('Ошибка!');
        return('Ошибка!');   
    }
}
reverse();

/* ОБЪЕДИНЯЕМ МАССИВЫ И УБИРАЕМ ИЗ НИХ ЛИШНЕЕ */
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) { 
    let currList = ''; 
    if (arr.length <= 0) {
        console.log('Нет доступных валют');
    }
    else {
        if (missingCurr === '') {
            arr.forEach(function(curr){
                currList += curr + '\n';
                });
                console.log('Доступные валюты: \n' + currList);
        }
        else {
            let newArr = arr.filter(curr => curr !== missingCurr);
            newArr.forEach(function(curr){
                currList += curr + '\n';
                });
                console.log('Доступные валюты: \n' + currList);
        }
    }
}
availableCurr([...baseCurrencies, ...additionalCurrencies], );

/* ПРОТОТИПНО ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ */
const learner = {
    health: 100,
    communication: 95,
    sports: 100,
    recreation: 65,
    sex: 55,
    settingUpComfort: function() {
        console.log('the house is nice and clean');
    }
};

const sasha = Object.create(learner); // ПРАВИЛЬНО СОЗДАЕМ ПРОТОТИП
Object.setPrototypeOf(sasha, learner);
sasha.settingUpComfort();

/* РАБОТАЕМ СО ЗНАЧЕНИЯМИ МАССИВА, ВЛОЖЕННЫЕ В ОБЪЕКТ */
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {

let SquareM3AllMoney = 0;
data.shops.forEach(shop => {
    SquareM3AllMoney += shop.length * shop.width * data.height * data.moneyPer1m3; 
});


if (data.budget < SquareM3AllMoney) {
    console.log('Бюджета недостаточно');
}
else if (data.budget <= SquareM3AllMoney) console.log('Бюджета достаточно');
console.log(SquareM3AllMoney);    
}
isBudgetEnough(shoppingMallData);


















