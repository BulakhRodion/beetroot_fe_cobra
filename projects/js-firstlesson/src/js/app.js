let NAME = prompt("Enter your name");
alert('Привет,' + ' ' + NAME + '!');

let userBirthYear = prompt("Enter your birth year");
const currentYear = (2020);
alert(currentYear - userBirthYear);

let squareSideLength = prompt("Enter side length of a square to get perimiter");
alert(squareSideLength * 4);

let circleArea = prompt("Enter circle radius to get it's area");
alert((circleArea ** 2) * 3.1415);

let roadDistance = prompt("Enter road distance in km");
let roadTime = prompt("Enter time (in hours) you want to cross this distance to know required movement speed");
alert(roadDistance / roadTime + 'km/h');

let amountDollar = prompt("Enter you dollar('s) amount");
const valueEuro = (0.8412);
alert(amountDollar * valueEuro);

let fleshCardSpace = prompt("Enter your card space in GB");
alert(fleshCardSpace / 0.820);

let walletMoney = prompt("Enter amount of money in your wallet");
let chocolatePrice = prompt("Enter chocolate price");
const chocolateAmount = (walletMoney / chocolatePrice);
const moneyRest = (walletMoney % chocolatePrice);
alert(chocolateAmount + ' ' + moneyRest + ' ' + 'остаток');

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

let amountDeposit = prompt("Enter your deposit amount");
const persentYearDeposit = (0.05);
let amountTwoMonth = 0;
amountTwoMonth = ((amountDeposit * persentYearDeposit * 61) / 365);
alert(amountTwoMonth);