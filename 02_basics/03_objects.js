// singleton
// Object.create   // object created through constructor 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sachin",
    "full name": "Sachin Hipparge",   // we cant acccess this through .fullname 
    [mySym]: "mykey1",    // here now it refers as symbol rather string
    age: 18,
    location: "Jaipur",
    email: "Sachin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])     // this is the best practice to access object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])      // this is way to access to object which is symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)    // after freezing changes again made cant apply
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){    // addng function in the object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());