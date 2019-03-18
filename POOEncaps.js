const assert = require('assert');

// ... Ton code ici ...
class BankCustomer {
	constructor(name, code){
		this.name = name;
		this.code = code;
	}
	getName(){
		return`${this.name}`
	}
	verifyPinInput(){
		if(this.code > 0){
			return true;
		} else {
			return false;
		}
	}
}


// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));