// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   true
// console.log("02" > 1);    true

// console.log(null > 0);   false
// console.log(null == 0);     false
// console.log(null >= 0);       true

// console.log(undefined == 0);   false
// console.log(undefined > 0);    false
// console.log(undefined < 0);   false

// // ===  

// console.log("2" === 2);     false

/*double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
Triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.
Object.is() does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values). */


// datatype summary

// non primitive type or reference type

const heroes = [ "shaktiman", " batman", "spiderman"]
let myObj = {
    name: "sachin",
    age: 20,
}

const myFunction = function(){

    console.log("hello world");
}
console.log(typeof myObj);
// console.log(myFunction())
// console.log(myObj.age)
// console.log(typeof myFunction)
// myObj.age=25
// console.log(myObj.age)


/////////////////////

/* two types of memory 
 
 stack and heap
 stack stores primitive type and it stores copy of that value , changes made doesnt effect the actual one  
 heap stores non primitive type and it stores the refrenece not the value , changes made efffect the original vlaue */

