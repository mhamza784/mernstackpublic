
const jwt = require('jsonwebtoken');
const express = require("express");
require('../db/Conn');
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/Authenticate");
const User = require('../model/userSchema');

// Async-Await method
router.post("/register", async (req, res) => {

    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        }
        const user = new User({ name, email, phone, password });

        await user.save();
        // const useRegister = await user.save();
        res.status(201).json({ message: "user registered successfully" });
        // if (useRegister) {
        //     return res.status(201).json({ message: "user registered successfully" });
        // } else {
        //     res.status(500).json({ error: "Failed Registered" });
        // }

    } catch (err) {
        console.log(err);

    }

});

// using promises
// router.post("/register",(req, res) => {

//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//         return res.status(422).json({ error: "Plz filled the field properly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" })
//             }

//             const user = new User({ name, email, phone, password });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfuly" });
//             }).catch((err) => res.status(500).json({ error: "Faild Registered" }));

//         }).catch(err => { console.log(err); });
// });


// Login Route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Plz fill the data' });
        }
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User Signing Successful" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
        // console.log(userLogin);
    } catch (err) {
        console.log(err);
    }

});
// Home page middleware
router.get('/home', authenticate, (req, res) => {
    res.send(req.rootUser);
});

// About logout clear token

router.get('/logout', (req, res) => {
    // console.log("My logOUt page");
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("user logout");
})

module.exports = router;