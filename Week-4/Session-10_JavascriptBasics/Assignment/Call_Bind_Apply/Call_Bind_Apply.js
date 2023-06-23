// Calculator class
class Calculator {
  // add method
  add(num1, num2) {
    return num1 + num2;
  }

  // subtract method
  subtract(num1, num2) {
    return num1 - num2;
  }

  // multiply method
  multiply(num1, num2) {
    return num1 * num2;
  }

  // divide method
  divide(num1, num2) {
    if (num2 === 0) {
      console.error("Error: Division by zero");
      return;
    }
    return num1 / num2;
  }
}

// ScientificCalculator class extending Calculator class
class ScientificCalculator extends Calculator {
  // square method
  square(num) {
    return num * num;
  }

  // cube method
  cube(num) {
    return num * num * num;
  }

  // power method
  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

// Create an instance of ScientificCalculator
const scientificCalc = new ScientificCalculator();

// Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5.
const resultAdd = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Result of add method using call:", resultAdd);

// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
const resultSubtract = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log("Result of subtract method using apply:", resultSubtract);

// Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result.
// Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class.
const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);

// Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result.
// Bind the "powerOfThree" method to the instance of the ScientificCalculator class.
const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);

// Optional: Call the "multiplyByTwo" method on the instance of the ScientificCalculator class with argument 5
// and print the returned result to the console.
const resultMultiplyByTwo = multiplyByTwo(5);
console.log("Result of multiplyByTwo method:", resultMultiplyByTwo);

// Optional: Call the "powerOfThree" method on the instance of the ScientificCalculator class with argument 2
// and print the returned result to the console.
const resultPowerOfThree = powerOfThree(2);
console.log("Result of powerOfThree method:", resultPowerOfThree);
