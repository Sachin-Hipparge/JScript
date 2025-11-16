// const tinderUser = new Object()   // declaring object  just it is singleton object
const tinderUser = {}     // it is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sachin",
            lastname: "Hipparge"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


//like arrays , combining object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}    // spread obj1 as well as obj 2
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1, 
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));     // givees jeys in the array datatype
// console.log(Object.values(tinderUser));    // same gives values
// console.log(Object.entries(tinderUser));    // first gives property and later value in separate array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    it will check property is there or not

// destrucring of object  //

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   // instead calling courseinstructor we can call instructor as well

// console.log(courseInstructor);   op hitesh
console.log(instructor);    // op hitesh


//JSON 

// here keys also will be in the form of string

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// it is also json format

[
    {},
    {},
    {}
]
