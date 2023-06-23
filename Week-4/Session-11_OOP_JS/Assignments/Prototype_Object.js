// Protecting the Object
const person = {};
Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
});
Object.defineProperty(person, "email", {
  value: "john@example.com",
  writable: false,
});
let age = 30;
Object.defineProperty(person, "age", {
  set: function (value) {
    age = value;
  },
});
person.getAge = function () {
  return age;
};
person.setAge = function (newAge) {
  age = newAge;
};

console.log("Name:", person.name);
console.log("Email:", person.email);
person.setAge(35);
console.log("Age:", person.getAge());


// JavaScript Prototype
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}


function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
  const baseDetails = Vehicle.prototype.getDetails.call(this);
  return `${baseDetails}, Number of Doors: ${this.numDoors}`;
};

const vehicle = new Vehicle("Toyota", "Camry", 2022);
const car = new Car("Honda", "Civic", 2021, 4);

console.log(vehicle.getDetails());
console.log(car.getDetails());
