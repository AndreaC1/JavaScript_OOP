console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
        console.log("This is the info method");
    }

    soundOff() {
        console.log("sound off");
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        this.hobbies = this.hobbies.filter((currentHobby) => currentHobby !== hobby);

    }

    greeting() {
        console.log("Hello person!")
    }

}

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {

        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log("Hello coder!")
    }
}


const person = new Person("Harry Potter", 1, "Hogwarts", ["qudditch", "potions", "sorcery"])
const coder = new Coder("Cody Coderson", 4, "Hawaii", ["coding", "reading about coding", "coding some more"])

person.info();
person.soundOff();
person.addHobby("causing trouble");
console.log(person.hobbies);
person.removeHobby("potions");
console.log(person.hobbies);

coder.greeting();
coder.addHobby("sing");
console.log(coder.hobbies);


//Exercise 4

class Calculator {
    constructor() {
        this.result = 0;
        return this.result;
    }

    add(a, b) {
        if (b = "undefined") {
            b = a;
            a = this.result;
        }

        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }



}


const calc = new Calculator();
calc.displayResult();
calc.add(2);
calc.displayResult();
calc.add(2,2);
calc.displayResult();
calc.subtract(5,2);
calc.displayResult();
calc.divide(8,2);
calc.displayResult();