const { errorHandler } = require("../../utils/commonFunctions")
//controller for facesbook login
const faceBookLogin = (req, res) => {
    try {
        if (req.isAuthenticated()) {
            return res.status(200).json({ status: true, statusCode: 200, message: `Login Successfull!... Welcome ${req.user.displayName}` });
        } else {
            return res.status(400).json({ status: false, statusCode: 400, message: "Something Went Wrong!.. Check Your Credentials" });
        }
    }
    catch (err) {
        errorHandler(error, res)
    }
}
module.exports = { faceBookLogin }