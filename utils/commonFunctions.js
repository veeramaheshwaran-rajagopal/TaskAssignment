//function for succeess response
function sendResponse(res, status, statusCode, message, data) {
    return res.status(statusCode).json({ status, statusCode, message: message, data: data });
}
//function for error handling
function errorHandler(err, res) {
    const response = {
        code: err.statusCode,
        message: err.message,
    };
    if (!response.code) {
        response.code = 400;
    }
    return res
        .status(response.code)
        .json({ message: `Oops,something went wrong`, error: ' ' + err });
}
// Generate a random OTP.
const generateOTP = () => {
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += Math.floor(Math.random() * 10);
    }
    return OTP;
};
module.exports = { sendResponse, errorHandler, generateOTP }