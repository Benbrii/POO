class Person {
	constructor(name, age){
		this.name = name; 
		this.age = age;
	}
	callname(){
		return`I am ${this.name}.`
	}
	callage(){
		return`I am ${this.age}.`
	}
}

const john = new Person("John", 40);
const mary = new Person("Mary", 35);

console.log(john.callname());
console.log(john.callage());
console.log(mary.callname());
console.log(mary.callage());