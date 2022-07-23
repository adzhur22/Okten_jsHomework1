// -Створити змінні.Присвоїти кожному з них
// значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let a1 = 'hello';
console.log(a1);
alert(a1);
document.write(a1);
let b2 = 'owu';
console.log(b2);
alert(b2);
document.write(b2);
let c3 = 'com';
console.log(c3);
alert(c3);
document.write(c3);
let d = 'ua';
console.log(d);
alert(d);
document.write(d);
let e = 1;
console.log(e);
alert(e);
document.write(e);
let f = 10;
console.log(f);
alert(f);
document.write(f);
let g = -999;
console.log(g);
alert(g);
document.write(g);
let h = 123;
console.log(h);
alert(h);
document.write(h);
let i = 3.14;
console.log(i);
alert(i);
document.write(i);
let j = 2.7;
console.log(j);
alert(j);
document.write(j);
let k = 16;
console.log(k);
alert(k);
document.write(k);
let l = true;
console.log(l);
alert(l);
document.write(l);
let o = false;
console.log(o);
alert(o);
document.write(o);

// -Створити 3 змінних firstName, middleName, lastName, наповнити їх
// своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, простоза допомоги конкатенації)

let firstName = "Boris";
let middleName = "Borisocvich";
let lastName = "Pochekaylo";

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

let person2 = `Іншим методом ${firstName} ${middleName} ${lastName}`; //інший метод
console.log(person2);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;


let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// - За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let myname = prompt("Напишіть ваше Ім'я");
let mysur = prompt("Напишіть ваше Прізвище");
let myold = prompt("Напишіть ваш рік народження");

let fin = `${myname} ${mysur} ${myold}`;
console.log(fin);