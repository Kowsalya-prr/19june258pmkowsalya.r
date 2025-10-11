// // var       old and not in use, they can be updated and redeclared
// // let       can be updated but cant redeclared
// // const     cant be updated but can redeclared

// // var oldName = "Kowsi"


// let age = 25;

//     age = 45; // Global scope
    


// const country ="India";  // Global scope
// {
//     const country ="USA";   // Block scope  
// }



// console.log(country);








// data types
// 1. string

let aeru="Kowsi";

console.log(aeru);


// 2. numbers

let age =25;

console.log(age);

let price=40.5;

console.log(price);


// 3. Bigint
// big values, rare use

let bignumber = 258896634567891477852225258741n;

console.log(bignumber + 1n);


// 4. Boolean
// values true or false

let isOnline= true;
let isOffline= false;

console.log(typeof isOnline);
// typeof used coz to chk what type of data it is
console.log(typeof isOffline);


// 5.undefined
// variables declared but no longer gives the value
// cricket match never started so score is empty or 0... therefore the output is undefined
let score;

console.log(typeof score)


// 6.null 
// means no value , empty on purpose so output will be object
let result=null;

console.log(typeof result);


// 7. object
// can store multiple values in one variable inside curly braces
let person = {
    name:"Kowsi",
    age:25,
}

console.log(person.age);
// accessing object property using values one by one, whatever value u needed u place there whether its name or age



// 8. symbol
// unique value modifier used mostly for advanced use
// s should be capital in Symbol
// we use symbol as an object 

// eg 1

// let id = Symbol("1");
// let id2 = Symbol("1");

// console.log(id === id2);


// eg 2

// let user = {
//     firstname: "Kowsi",
//     birth: 25,
// };

// let id = Symbol("id");
// user[id] = 123;

// let admin = Symbol("admin");
// user[admin] = 456;

// console.log(user);


// eg 3, 2 libraries for saftey

let user ={
    name: "Kowsi",
}

// library a

let id1 = Symbol("id");
user[id1] = 101;

// library 2

let id2 = Symbol("id");
user[id2] = 120;

console.log(user);




// use symbols when u need a unique key, no accidental override, useful for large apps, useful for library
// eg. amazon, there are lots of libraries and categories in which all of them can be mapped into id but they should have different id in order to collect the smae data



// operators
let a = 1;
let b = 2;

// = means assigning operator
let c = a + b;
console.log(c);

let d = a - b;
console.log(d);

let e = a * b;
console.log(e);

let f = a / b;
console.log(f);

let g = a % b;
console.log(g);

// ** exponentiation means power values
let h = a ** b;
console.log(h);

