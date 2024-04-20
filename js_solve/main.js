// حل التكليف الثاني
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight = 'bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'Arial';

//------------------------------------------------------------

// حل التكليف التالت
console.log("%cElzero %cWeb %cSchool", "color: red; font-size:40px;", "color: Green; font-size:40px; font-weight: bold;", "color: white; background-color:blue; font-size:40px;");

//------------------------------------------------------------

// حل التكليف الرابع
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");

//------------------------------------------------------------

//حل التكليف الخامس
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

//------------------------------------------------------------

//حل التكليف السادس
//console.log("Iam In Console");
// document.write("Iam In Page");

/*console.log("Iam In Console");
document.write("Iam In Page");*/

//------------------------------------------------------------

//حل تكليفات الاسبوع التاني
//حل التكليف الاول
let num1 = 10;
let num2 = 20;
console.log(num1 + "" + num2);
console.log(typeof (num1 + "" + num2));
console.log(`${num1}${num2}`);
console.log(typeof (`${num1}${num2}`));

console.log(num1 + "\n" + "" + num2);
console.log(`${num2}
${num1}`);

// ---------------------------------------------------------

//حل التكليف التاني
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// ---------------------------------------------------------

//حل التكليف التالت
console.log(`\`I'm In
\\\\
Love \\\\ \"\"\" \'\'\'
\+\+ With \+\+
\\\"\"\"\\\"\"\"
\"\"JavaScript\"\"\`\``);

// ---------------------------------------------------------

//حل التكليف الرابع
let a = 21;
let b = 20;

console.log(`_${a}_${b+""+a}_${b}${a}_${b}${a}_${b}_`);

// ---------------------------------------------------------

//حل تكليفات الاسبوع التالت
//حل التكليف الاول
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); 

// ---------------------------------------------------------

//حل التكليف التاني
// let num = 3;

// // Solution One
// console.log(num + num); 

// // Solution Two
// console.log(num * --num);

// // Soultion Three
// console.log(++num + num);

// // Soultion Four
// console.log(num * num - num);

// // Solution Five
// console.log(num ** num / num - num);

// // Solution Six
// console.log(--num * num + num);

// ---------------------------------------------------------

//حل التكليف التالت
// let num = "10";

// // Solution One
// console.log(+num + +num);

// // Solution Two
// console.log(+num + --num + +num - --num);

// // Solution Three
// console.log(--num + +num + --num);

// // Solution Four
// console.log(+num * --num - +num - +num);

// ---------------------------------------------------------

//حل التكليف الرابع
let points = 10;

// Write Your Code Here
points += 3;
console.log(points); // 13

// Write Your Code Here
points -= 5
console.log(points); // 8

// ---------------------------------------------------------

//حل تكليفات الاسبوع الرابع
//حل التكليف الاول
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(100000.4)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.999)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number(100000.40.toFixed(0))); // 100000
console.log(10 ** 5); // 100000
console.log(Math.max(50000, 8000, 40000, 100000)); // 100000
console.log(parseInt(100000.40)); // 100000
console.log(Math.round(parseFloat(100000.40))); // 100000

// ---------------------------------------------------------

//حل التكليف التاني
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// ---------------------------------------------------------

//حل التكليف التالت
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

// ---------------------------------------------------------

//حل التكليف الرابع
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

//------------------------------------------------------------

//حل التكليف الخامس
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num));// 2

//------------------------------------------------------------

//حل التكليف السادس
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

//------------------------------------------------------------

//حل التكليف السابع
console.log(Math.floor((Math.random() * 5) + 0)); // 0 || 1 || 2 || 3 || 4

//------------------------------------------------------------

//حل التكليف التامن
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(-6, -5).toLowerCase().repeat(3)); // eee

//------------------------------------------------------------

//حل التكليف التاسع
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True