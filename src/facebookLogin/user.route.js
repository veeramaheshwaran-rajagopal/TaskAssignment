const express = require("express")
const router = express.Router()
const passport = require("passport")
const userController = require("./user.controller")
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook',
        { successRedirect: '../../login', failureRedirect: '../../login' }
    ));
router.get('/login', userController.faceBookLogin);

module.exports = router