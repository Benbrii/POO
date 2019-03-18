class Vehicle {
	constructor(color, model){
		this.color = color;
		this.model = model;
	}
	getColor(){
		return this.color
	}
	getModel(){
		return this.model
	}
}

const myVehicle = new Vehicle('red', 'vw');
console.log(myVehicle.getColor())
console.log(myVehicle.getModel())

class Car extends Vehicle{
	constructor(color, model){
		super(color, model)
	}
	getType(){
		return 'voiture'
	}
}

const honda = new Car('green', 'honda');
console.log(honda.getType())