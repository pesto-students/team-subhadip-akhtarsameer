class CustomPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (error) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.error = error;
        this.onRejectedCallbacks.forEach((callback) => callback(this.error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled(value);
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (error) => {
        try {
          const result = onRejected(error);
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === 'fulfilled') {
        setTimeout(() => handleFulfilled(this.value), 0);
      } else if (this.status === 'rejected') {
        setTimeout(() => handleRejected(this.error), 0);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

// Example usage:
const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });

// You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
// const myPromise = new CustomPromise((resolve, reject) => {
//   // Reject the Promise immediately
//   reject('Error!');
// });

// myPromise.catch((error) => {
//   console.error(error); // Output: Error!!
// });
