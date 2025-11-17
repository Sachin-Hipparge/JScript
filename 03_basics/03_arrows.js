const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this refers to current context
        console.log(this);
    }

}

// user.welcomeMessage()  // op hitesh welcome to website
// user.username = "sam"
// user.welcomeMessage()   // op sam welcome to website

// console.log(this);    // op {}  bcos here global scope is empty object where as in the browser globsl context is windows

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);         // op undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // op undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);  //op undefined    
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )  // if we write inside the curly parenthesis we need to return but here no need to explicit return

const addTwo = (num1, num2) => ({username: "hitesh"})  // returning object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()