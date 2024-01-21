// Function 1: A simple async function that resolves after a delay
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Function 1: Resolved after ${ms} milliseconds`);
        }, ms);
    });
};

// Function 2: Another async function that simulates a network request
const fetchData = async () => {
    return new Promise((resolve) => {
        // Simulating a network request with setTimeout
        setTimeout(() => {
            resolve('Function 2: Data received from the server');
        }, 2000);
    });
};

// Function 3: An async function that throws an error after a delay
const throwError = async () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Function 3: Simulated error occurred'));
        }, 1500);
    });
};

module.exports = { delay, fetchData, throwError }
