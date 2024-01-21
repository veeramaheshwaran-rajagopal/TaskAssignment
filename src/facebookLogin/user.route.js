const express = require("express")
const router = express.Router()
const passport = require("passport")
const userController = require("./user.controller")
// Route to initiate Facebook authentication
router.get('/auth/facebook', passport.authenticate('facebook'));
// Callback route after Facebook authentication
router.get('/auth/facebook/callback',
    passport.authenticate('facebook',
        { successRedirect: '../../login', failureRedirect: '../../login' }
    ));
// Route to handle Facebook login
router.get('/login', userController.faceBookLogin);
// Export the router for use in other parts of the application
module.exports = router