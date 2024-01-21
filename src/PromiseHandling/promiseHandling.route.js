const express = require("express")
const router = express.Router()
const { executeFunctions } = require("./promiseHandling.controller")
//route for promise handling
router.get("/execute", executeFunctions)
// Export the router for use in other parts of the application
module.exports = router