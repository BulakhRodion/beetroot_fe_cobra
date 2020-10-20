//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let NAME = prompt("Enter your name");
alert('Привет,' + ' ' + NAME + '!');

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
let userBirthYear = prompt("Enter your birth year");
const currentYear = (2020);
alert(currentYear - userBirthYear);

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let squareSideLength = prompt("Enter side length of a square to get perimiter");
alert(squareSideLength * 4);

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let circleArea = prompt("Enter circle radius to get it's area");
alert((circleArea ** 2) * 3.1415);

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let roadDistance = prompt("Enter road distance in km");
let roadTime = prompt("Enter time (in hours) you want to cross this distance to know required movement speed");
alert(roadDistance / roadTime + 'km/h');

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let amountDollar = prompt("Enter you dollar('s) amount");
const valueEuro = (0.8412);
alert(amountDollar * valueEuro);

// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
let fleshCardSpace = prompt("Enter your card space in GB");
alert(fleshCardSpace / 0.820);

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
let walletMoney = prompt("Enter amount of money in your wallet");
let chocolatePrice = prompt("Enter chocolate price");
const chocolateAmount = (walletMoney / chocolatePrice);
const moneyRest = (walletMoney % chocolatePrice);
alert(chocolateAmount + ' ' + moneyRest + ' ' + 'остаток');

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let a = prompt("Enter any three-digit number to reverse it");
let b, c, d; 
let result = 0;
b = String(a % 10);
a = ((a - b) / 10);
c = String(a % 10);
a = ((a - c) / 10);
d = String(a % 10);
result = (b + c + d);
alert(result);

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
let amountDeposit = prompt("Enter your deposit amount");
const persentYearDeposit = (0.05);
let amountTwoMonth = 0;
amountTwoMonth = ((amountDeposit * persentYearDeposit * 61) / 365);
alert(amountTwoMonth);