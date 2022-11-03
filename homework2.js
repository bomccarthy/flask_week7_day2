//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function toTitleCase(str0){
        return (str0.toLowerCase()).split(' ').map(function(title){
            return title.replace(title[0], title[0].toUpperCase());
        }).join(' ');
    }

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco Bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        'cupids candies':"Chocolate Malt"
    }]
}

function favoriteFood(){
    let favFood = Number(prompt("Person3's favorite food? (pizza=1, tacos=2, burgers=3, ice_cream=4, shakes=5)"));
    if (favFood === 1){
        return `The favorite kinds of pizza are ${person3.pizza[0]} and ${person3.pizza[1]}.`
    } else if (favFood === 2){
        return `The favorite kinds of tacos are ${person3.tacos}.`
    } else if (favFood === 3){
        return `The favorite kinds of burgers are ${person3.burgers}.`
    } else if (favFood === 4){
        return `The favorite kinds of Ice Creams are ${person3.ice_cream[0]}, ${person3.ice_cream[1]}, and ${person3.ice_cream[2]}.`
    } else if (favFood === 5){
        favIceCream = Number(prompt(`From Where? (${toTitleCase(Object.keys(person3.shakes[0])[0])}=1, ${toTitleCase(Object.keys(person3.shakes[0])[1])}=2, ${toTitleCase(Object.keys(person3.shakes[0])[2])}=3, ${toTitleCase(Object.keys(person3.shakes[0])[3])}=4, ${toTitleCase(Object.keys(person3.shakes[0])[4])}=5)`));
        if (favIceCream === 1){
            return `The favorite kind of Ice Cream from ${toTitleCase(Object.keys(person3.shakes[0])[0])} is ${person3.shakes[0].oberwise}.`
        } else if (favIceCream === 2){
            return `The favorite kind of Ice Cream from ${toTitleCase(Object.keys(person3.shakes[0])[1])} is ${person3.shakes[0].dunkin}.`
        } else if (favIceCream === 3){
            return `The favorite kind of Ice Cream from ${toTitleCase(Object.keys(person3.shakes[0])[2])} is ${person3.shakes[0].culvers}.`
        } else if (favIceCream === 4){
            return `The favorite kind of Ice Cream from ${toTitleCase(Object.keys(person3.shakes[0])[3])} is ${person3.shakes[0].mcDonalds}.`
        } else if (favIceCream === 5){
            return `The favorite kind of Ice Cream from ${toTitleCase(Object.keys(person3.shakes[0])[4])} is ${person3.shakes[0].cupids_candies}.`
        }
    }
}

// console.log(favoriteFood())     // <------ You must uncomment this <-------

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     printInfo(){
//         console.log(`This is a patient named ${this.name} of age ${this.age}.`);
//     }

//     age_up(){
//         this.age += 1;
//         console.log(`Their age has changed to ${this.age}.`);
//     };
// }

// let person1 = new Person('Mrs Burke', 23)
// person1.printInfo();
// person1.age_up();

// let person2 = new Person('Mr Lewis', 35)
// person2.printInfo();
// person2.age_up();
// person2.age_up();
// person2.age_up();

// --------------------------------Version 2--------------------------------

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

        this.addAge = (plus) => {
            this.addAge = this.age + plus
            console.log(`This adds ${plus} years to their age. The new age is ${this.addAge}.`);
        };

        this.printInfo = () => {
            console.log(`This is a patient named ${this.name} of age ${this.age}.`);
        };
    }

    age_up(){
        this.age += 1;
        console.log(`Their age has changed to ${this.age}.`);
    };
}

let person4 = new Person('Mrs Burke', 23)
person4.printInfo();
person4.age_up();

let person5 = new Person('Mr Lewis', 35)
person5.printInfo();
person5.age_up();
person5.age_up();
person5.age_up();

let person6 = new Person('Mr Robinson', 24)
person6.printInfo();
person6.addAge(5);

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let isGreaterThan = (str) => {
    return new Promise((resolve, reject)=>{
        if (str.length > 10){
            resolve(str);
        } else {
            reject(str);
        }
    })
    .then( () => {
        console.log("Big word");
    })
    .catch( () => {
        console.log("Small Number");    
    });
}

// isGreaterThan('My friends are Dany, Kamaree, and Evan.')
// isGreaterThan('Big Bo')
// isGreaterThan('This is a longer string than 10.')
isGreaterThan('what if 10')