const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cors = require("cors")
const { doConnect } = require("./config/dbConfig")
const passport = require("passport")
const facebookStrategy = require("passport-facebook").Strategy
const Route = require("./src/index")
const session = require('express-session');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.options('*', cors());
app.use(cors());
// Use sessions to keep track of login status
app.use(session({ secret: process.env.sessionSecret, resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())
app.use("/api", Route)
passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOKCLIENTID,
    clientSecret: process.env.FACEBOOKSecret,
    callbackURL: "http://localhost:3000/api/user/auth/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
    // You can handle the user data here
    return done(null, profile);
}));
passport.serializeUser((user, callback) => {
    callback(null, user)
})
passport.deserializeUser((obj, callback) => {
    callback(null, obj)
})
app.listen(process.env.PORT, () => { console.log(`Server Running On Port ${process.env.PORT}`) })
doConnect()