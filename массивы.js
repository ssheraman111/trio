// ! ==========================Массивы========================

// let mentors = ["Bayish", "Janat", "Salamat", "Anton"];

// console.log(mentors);

// console.log(typeof mentors);
//  Object

// !=============================Индексация==========================

// ? Индекс - это порядковый номер элемента в массиве, который начинается с нуля

console.log(mentors[2]);

console.log(mentors[0]);

let randomArray = ["Hello", 25, true, { model: "Ford" }, null, undefined];

console.log(randomArray[5]);

let objectFromArray = randomArray[3];

console.log(objectFromArray);

// ? length - длина массива - показывает количество элементов в массиве

// console.log(randomArray.length);

// ? Вытащить последний элемент из массива

// console.log(randomArray[randomArray.length - 1]);

// // !====================Арифметические операции=================
// // Сложение
// console.log(1 + 1);
// // 2

// // Вычитание
// console.log(5 - 2);
// // 3

// //умножение
// console.log(3 * 2);
// 6

// деление
// console.log(20 / 5);
// 4

// const number1 = 33;
// const number2 = 77;
// console.log(number1 + number2);

// const sum = number1 + number2;

// console.log(sum);

// const result = sum - 11;
// console.log(result);

// ! Возведение в степень
// const expression = 2 ** 3;
// console.log(expression);

// Остаток от деления

// const a = 10 % 7;
// const b = 4 % 2;

//  3
// console.log(a);
// console.log(b);

// ? конкатенация - склеивание данных

// const x = "some string" + 5;

// console.log(x);

// приведение типов
// const c = "100" * 5;
// console.log(c);

// const great = "hello";
// const subject = "world";
// const message = great + " " + subject;
// console.log(message);

// !====================интерполяция=======================

// let name = "Jazmira";
// let age = 22;
// console.log(`My name is ${name}. I am ${age} y.o`);

// ! ===========================Interactions====================
// ? alert - показывает небольшое окно с сооюшением (модальное окно)
// alert("Hello every day!");

// ? prompt - отображает модальное окно с инпутом и двумя кнопками для получения данных от пользователя

// let age2 = prompt("enter your age");
// console.log(age2);
// alert(`your age is ${age2} y.o`);

// ? confirm - отображает модальное окно с текстом вопроса и двумя кнопками

// let checkAge = confirm("Есть ли вам 18 лет?");
// console.log(checkAge);

// !============================Операторы сравнения====================
// ? всегда возвращает booltan

// const number1 = 10;
// const number2 = 20;
// console.log(number1 > number2);
// false

// console.log(20 >= 15);
//  true

// console.log(50 >= 50);
//  true

// console.log(5 <= 4);
//  false

// console.log("54" <= 100);
// true
// ?не строгое равенство
// console.log("10" == 10);
//  true

// console.log("h10" == 10);
//  false

//  ? строгое равенство - Учитывает тип данных при сравнении
// console.log("10" === 10);
// False

// todo не строгое не равенство
// console.log("24" != 24);
// TRUE/false
// todo строгое не равенство

// console.log("24" !== 24);
// true

// ?

//=================Boolean=====================

// console.log(Boolean("some string")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean(40)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-50)); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// todo ложные (false значение)
// 0
// null
// undefined
// ''
// false

// !...

// !=================ПЕРЕМЕННЫЕ====================

// ?Переменные - это именнованное хранилише для данных.
// ключевые слова для создания переменных: var, const, let

// let name;
// let name1;
// let $name;
// let _name;
//  let имя;  не желательно
// let Name;

// let name = "JavaScript";
// нельзя создавать переменные с одинаковыми названиями

// // ? const -
// const age = 25;

// // ? var - устаревший способ объявления переменных

// var language = "JS";

// console.log(age);

// !============HOISTING=================
// TODO Хойстинг - это поднятие объявления переменной

// console.log(someVar);
// let someVar = "С переменной let Хойстинг не работает";

// var someVar2 = "hoisting Работает только с переменной Var";
// console.log(someVar2);

// ! =================Изменение данных переменной=================

// let car = "Tesla";
// console.log(car);

// car = "Mercedes";
// console.log(car);

// ? const - Нельзя присвоит новое значение переменной, объявленной при помощи const
// const brand = "Adidas";
// console.log(brand);

// ! =======================Копирование данных===================

// let student1 = "Sheraman";
// let student2 = student1;

// console.log(student1);
// console.log(student2);

// ! =================Типы данных===========================
// let id;
// console.log(typeof id);
// // undefined
// id = 45;
// console.log(typeof id);
// // number
// id = 45n;
// console.log(typeof id);
// // bingint
// id = "45";
// console.log(typeof id);
// // string
// id = null;
// console.log(typeof id);
// // object
// id = {
//   name: "Salamat",
//   age: 30,
//   alive: true,
// };
// console.log(typeof id);
// // object
// id = true;
// console.log(typeof id);
// // boolean true/fols
// id = Symbol();
// console.log(typeof id);
// // symbol

// !=======================Объекты=====================

const person = {
  name: "John",
  age: 26,
  job: "Frontend Dev",
  car: {
    modal: "Brabus",
    color: "black",
  },
};

console.log(person);
console.log(person.name);
console.log(person.car.modal);

let personName = person.name;
console.log(personName);

let age2 = prompt("enter your age:");
console.log(age2);

// !================УСЛОВНЫЕ ОПЕРАТОРЫ============
// ? ----------if  ... else if ... else----------

// if (условие){
//     код
// }else{
//     код2, (если условие не верно)
// }

// const age = 13;

// if (age >= 18) {
//   alert("Доступ разрешен");
// } else {
//   alert("Вам нет 18 лет, доступ закрыт");
// }

// ============
// const user = {
//   isAdmin: false,
// };

// if (!user.isAdmin) {
//   console.log("вы не админ");
// } else {
//   console.log("вы админ");
// }

// ===========

// const age = 50;

// if (age > 18) {
//   console.log("доступ разрешен");
// } else if (age === 18) {
//   console.log("ну ладно, тоже разрешен");
// } else {
//   console.log("доступ запрешен");

// ! если не один из блоков if и else if не возвратил true,
//! то в этом случае срабатывает блок else

// todo============Тернарный Оператор=============

// let sale = 20;
// let buyPhone;

// if (sale > 30) {
//   buyPhone = true;
// } else {
//   buyPhone = false;
// }

// sale > 30 ? (buyPhone = true) : (buyPhone = false);
// // можно переписать простые условия if ...else через тернарный
// // оператор:
// // условие ? (действие 1, если true) : (действие 2, если false)

// console.log(buyPhone);

// ======
// let marks = prompt("Enter your marks");
// let result = marks >= 61 ? "pass" : "fail";

// console.log("you ${result} the exam.");

// !======SWITCH==========

// const income = 600;

// switch (income) {
//   case 100:
//     console.log("доход равен 100");
//     break;
//   case 200:
//     console.log("доход равен 200");
//     break;
//   case 300:
//     console.log("доход равен 300");
//     break;
//   case 400:
//     console.log("доход равен 400");
//     break;

//   default:
//     console.log("доход задан неверно");
// }

// ===========

// let dayOfWeek = +prompt("Enter numbers of day");

// if (dayOfWeek === 1) {
//   console.log("Monday");
// } else if (dayOfWeek === 2) {
//   console.log("tuesday");
// } else if (dayOfWeek === 3) {
//   console.log("wednesday");
// } else if (dayOfWeek === 4) {
//   console.log("thursday");
// } else if (dayOfWeek === 5) {
//   console.log("friday");
// } else if (dayOfWeek === 6) {
//   console.log("saturday");
// } else if (dayOfWeek === 7) {
//   console.log("sunday");
// } else {
//   console.log("Wrong day of week");
// }

// switch ("dayOfWeek") {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;

//   default:
//     console.log("no such day of week");
// }

// 1. Используя условынй оператор switch определите тип данных переменной x. Результат выведите в консоли.
// let x = true;
// let x = { name: "Sam" };
// let x = 123;
// let x = "Hello World!";
// let x = [12, "str", false];

// switch (typeof x) {
//   case "number":
//     console.log(`тип данных  x - number`);
//     break;
//   case "object":
//     console.log(`тип данных  x - object`);
//     break;
//   case "string":
//     console.log(`тип данных  x - string`);
//     break;
//   case "boolean":
//     console.log(`тип данных  x - boolean`);
//     break;
//   default:
//     console.log(`нет такого кейса`);
// }

// if (typeof x === "number") {
//   console.log("тип данных x - number");
// } else if (typeof x === "object") {
//   console.log("тип данных x - object");
// } else if (typeof x === "string") {
//   console.log("тип данных x - string");
// } else if (typeof x === "undefined") {
//   console.log("тип данных x - undefined");
// } else if (typeof x === "boolean") {
//   console.log("тип данных x - boolean");
// } else {
//   console.log("нет такого кейса");
// }

// let aaa = typeof 2; //'number'

// console.log(typeof

// aaa);

// 2. Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature < 0, вывести "Температура воздуха опустится до ${temperature} градусов", в остальных случая вывести  "Температура воздуха поднимется до ${temperature} градусов"
// let temperature = -5;

// temperature < 0
//   ? console.log(`Температура воздуха опустится до ${temperature} градусов`)
//   : console.log(`Температура воздуха поднимется до ${temperature} градусов`);

// let str = 'coding'

// console.log(str[1])
// console.log(str[str.length -2])
// console.log(str[str.length -1])

// console.log(str.length)

// let num = 5
// if (num >0 && num <10) {
//   console.log(`число ${num} однозначное `)
// }  else if (num >0 && num <100){
//     console.log
//   } console.log(`Число`)

// TODO 1. Напишите программу, которая проверяет,
// является ли введенное число четным или нечетным, используя
// оператор «%». Выведите «Число ${число} четное», если число
// делится на 2. Иначе выведите «Число ${число} нечетное»,
// если число возвращает остаток при делении на 2

// let nnn= 2
// switch ("nnn") {
//     case nnn % 2 == 0:
//        console.log("even");
//     break;
//      else {

//        console.log("odd");

//      }

// TODO 2. Даны 2 числа при помощи
// условных операторов выведите наибольшее,
//  также учтите вариант, что числа могут быть равны

// let num1 = 1;
// let num = 1;
// if (num1 >= num) {
//   console.log(num1 );
// }

// else {
//   console.log(num);
// }

// let firstNum = 10;
// let secondNum = 5;

// if (firstNum > secondNum) {
//   console.log(наибольшее число ${firstNum});
// } else if (secondNum > firstNum) {
//   console.log(наибольшее число ${secondNum});
// } else if ((firstNum = secondNum)) {
//   console.log( число ${firstNum} = числу ${secondNum});
// } else {

// TODO 4. Вам даны 3 числа, одно ссылается на начало диапазона,
// второе на конец и третье просто число.
//  Вам нужно Вывести в консоли "В диапазоне",
//  если число находится между начальным и конечным значениями.
//  В противном случае вывести "Вне диапазона"

// let num1 = 1
// let num2 =  15
// let num3 = 14

// if ( num1 <= num3 && num3 <= num2 ) {
//   console.log("В диапазоне");
// }  else {
//   console.log( 'out of range');
// }

// / TODO 5. напишите калькулятор, используя prompt
// и условные операторы. Программа должна запрашивать первое
//  число, второе число и какую операцию применить к этим
//   числам (сложение, вычитание и т.д), также должен быть
//    вывод результата в консоли ввиде :
// Сумма числа ${num1}
// и числа ${num2} равна ${num1 + num2}

// const income = 600;

//   switch (income) {
//     case 100:
//       console.log("доход равен 100");
//       break;
//     case 200:
//       console.log("доход равен 200");
//       break;
//     case 300:
//       console.log("доход равен 300");
//       break;
//     case 400:
//       console.log("доход равен 400");
//       break;

//     default:
//       console.log("доход задан неверно");
//   }

//   let age1 = prompt("enter num1");
//   let age2 = prompt("enter num2");
//   let age3 = prompt(" ? ");

// console.log(age2);
// alert(age1, age2, age3);

// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let operation = prompt("Enter operation (+, -, *, /) :");

//   switch (operation) {
//     case '+':
//       console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
//       break;
//     case '-':
//       console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
//       break;
//     case '*':
//       console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
//       break;
//     case '/':
//       console.log(`The division of ${num1} by ${num2} is ${num1 / num2}`);
//       break;

//     default:
//       console.log("Invalid operation");

// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let operation = prompt("Enter operation (+, -, *, /) :");

// if (operation === "+") {
//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
// } else if (operation === "-") {
//     console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
// } else if (operation === "*") {
//     console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
// } else if (operation === "/") {
//     console.log(`The division of ${num1} by ${num2} is ${num1 / num2}`);
// } else {
//     console.log("Invalid operation");

//TODO 7. Напишите программу, которая будет 2 значения через prompt:
// первое - размер зарплаты сотрудника, второе: стаж работы.
//  В случае, если стаж работы меньше 1 года,
//  надбавка не начисляется, в случае если стаж работы от 1 до 3х лет,
//   надбавка будет 10%, если стаж работы от 3х до 5 лет,
//   то надбавка 15%, в случае, если стаж работы от 5 лет и более,
//    надбавка будет 20%.
//   В итоге в alert вам нужно вывести величину зарплаты с учетом надбавки

// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let operation = prompt("Enter operation (+, -, *, /) :");

// let year = (prompt("Enter years of work: "));
// let salary = 500;

// if (year < 1) {
//   console.log({salary});
// } else if ( 3 >= year >= 1 ) {
//   console.log((salary/10)+salary);
// } else if ( 5 >= year >= 3 ) {
//   console.log((salary * 0.15)+salary);
// } else if ( 99 >= year >= 5 ) {
//   console.log((salary * 0.20)+salary);
// }
// let totalSalary = salary + bonus;

//TODO 8. Напишите программу, которая будет определять високосный год или нет
//год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — невисокосные
// (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, — високосные[5].
// все остальные годы — невисокосные.

// let year = (prompt("year: "));

//       let bonus = 0;

//       if (year % 400 == 0) {
//           console.log (`${year} високосный `)
//       } else if (year % 100 == 0) {
//         console.log (`${year} не високосный `)
//       } else if (year % 4 == 0) {
//         console.log (`${year} високосный `)
//       } else {
//         console.log (`${year} не високосный `)
//       }

// Остаток от деления

// const a = 10 % 7;
// const b = 4 % 2;

// let year = +prompt('year: ');

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log('високосный');
// } else {
//   console.log('не високосный');
// }

//TODO 9. Напишите программу, которая запрашивает количество баллов за экзамен,
//  и в зависимости от полученного числа выводит оценку в виде alert на экран:

// от 0 до 61 баллов - экзамен не сдан
// от 61 до 74 - удовлетворительно
// от 74 до 87 - хорошо
// от 87 до 100 отлично

// в остальных случаях попросить пользователя ввести корректные данные

//       let results = (prompt("result: "));

//       let bonus = 0;

//       if (result  % 400 == 0) {
//           console.log (`${year} високосный `)
//       } else if (year % 100 == 0) {
//         console.log (`${year} не високосный `)
//       } else if (year % 4 == 0) {
//         console.log (`${year} високосный `)
//       } else {
//         console.log (`${year} не високосный `)
//       }
