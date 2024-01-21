function sendResponse(res, status, statusCode, message, data) {
    return res.status(statusCode).json({ status, statusCode, message: message, data: data });
}
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
module.exports = { sendResponse, errorHandler }