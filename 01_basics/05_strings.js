 const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");    op = hitesh50 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    // modern syntax   (  string interpretation  )

const gameName = new String('hitesh-hc-com')  // declaring string 

// console.log(gameName[0]);    op h
// console.log(gameName.__proto__);    op {} 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // op hite  cant provide  nega value
console.log(newString);

const anotherString = gameName.slice(-8, 4)   // op ite   can provide neg value
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);   // op =  hitesh
console.log(newStringOne.trim());   // op = hitesh    // remove extra spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))     // op = https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))      // op = false

console.log(gameName.split('-'));        //string splits based on '-' and gives in the arrray form 