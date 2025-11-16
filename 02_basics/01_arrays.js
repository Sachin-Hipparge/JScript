// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)    // adds value in the myArr
// myArr.push(7)
// myArr.pop()     // removes last value from the myArr

// myArr.unshift(9)     // adds value in zeroth index 
// myArr.shift()        // removes the zeroth index value

// console.log(myArr.includes(9));   // returns boolean value
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      returns string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);     // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)   // slice does not include range and it wont manioulate the original array

console.log(myn1);    // [1,2]
console.log("B ", myArr);  // B [0,1,2,3,4,5]  it will be same which didnt manipulate the oringinal array


const myn2 = myArr.splice(1, 3)      // splice includes range and it effects the original array
console.log("C ", myArr); // c [ 0,4,5]  // here splice manipulated original array 
console.log(myn2); // [1,2,3]