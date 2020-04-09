class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hello. I am ${this.firstName}`);
    }
}

const user1 = new Human('Dmytro', 'Ivanov');
const user2 = new Human('Petro', 'Belov');

console.log(user1);
console.log(user2);

class Swimmer extends Human {
    constructor(style) {
       super(firstName, lastName);
       this.style = style;
    }
    
    swim() {
        console.log(`My style is ${this.style}`);
    }
}
    
const sw1 = new Swimmer('Eugine', 'Snow', 'brass');

sw1.sayHi();
sw1.swim();
sw1.toString();
console.log(sw1);
console.log(sw1.toString());