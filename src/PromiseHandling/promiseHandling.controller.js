const { sendResponse, errorHandler } = require("../../utils/commonFunctions")
const { delay, fetchData, throwError } = require("./promiseHandling.service")
// Function to orchestrate the execution of the three functions
const executeFunctions = async (req, res) => {
    // Function 1: Resolves after 1000 milliseconds
    const result1 = await delay(1000);
    console.log(result1);

    // Function 2: Simulates a network request and resolves after 2000 milliseconds
    const result2 = await fetchData();
    console.log(result2);

    // Function 3: Throws an error after 1500 milliseconds
    await throwError(); // If this line is reached, no error occurred in Function 3
    return sendResponse(res, true, 200, "All functions executed successfully.")
};
module.exports = { executeFunctions }
