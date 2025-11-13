let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);     output = string type

// ******************operations******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);    op hello hitesh

// console.log("1" + 2);   op 12
// console.log(1 + "2");   op 12
// console.log("1" + 2 + 2);  op 122
// console.log(1 + 2 + "2");  op 32  // is the first value is string it treat whole as string otherwise not

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  op 1
// console.log(+"");  op 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);      // op 101  docs = prefix and postfix mdn  

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


let a=4
const b= ++a
//console.log(a , b);

let x=4
const y= x++
console.log(x , y);

