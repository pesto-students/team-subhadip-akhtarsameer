// Section 1 - Inheritance
class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
      super(make, model, year, color);
      this.numSeats = numSeats;
    }
  }
  
  class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
      super(make, model, year, color, numSeats);
      this.isAvailable = isAvailable;
    }
  }
  
  // Section 2 - Polymorphism
  class Shape {
    calculateArea() {
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Section 3 - Abstraction and Encapsulation
  class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      // To be implemented in subclasses
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    withdraw(amount) {
      if (this.#balance - amount >= 0) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient funds. Withdrawal failed.");
      }
    }
  }
  
  // Testing the implementations
  const vehicle = new Vehicle("Toyota", "Camry", 2022, "Blue");
  vehicle.drive();
  
  const car = new Car("Honda", "Civic", 2021, "Red", 5);
  car.drive();
  
  const rideShareCar = new RideShareCar("Uber", "Prius", 2020, "Black", 4, true);
  rideShareCar.drive();
  
  const rectangle = new Rectangle(5, 10);
  console.log("Rectangle area:", rectangle.calculateArea());
  
  const triangle = new Triangle(6, 8);
  console.log("Triangle area:", triangle.calculateArea());
  
  const circle = new Circle(3);
  console.log("Circle area:", circle.calculateArea());
  
  const checkingAccount = new CheckingAccount("123456", 1000, "John Doe");
  checkingAccount.deposit(500);
  checkingAccount.withdraw(200);
  console.log("Checking account balance:", checkingAccount.getBalance());
  
  const savingsAccount = new SavingsAccount("654321", 2000, "Jane Smith");
  savingsAccount.deposit(1000);
  savingsAccount.withdraw(3000); // Withdrawal fails due to insufficient funds
  console.log("Savings account balance:", savingsAccount.getBalance());
  