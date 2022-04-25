const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();
const { response } = require("express");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "1234567";

router.post("/", async (req, res) => {
    try {
        console.log(req.body.email);
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res
            .status(400)
            .send({ message: "Please make sure to enter all field" });
        } else {
             User.findOne({ email : req.body.email}).exec(async (err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong..!",
                    });
                } else {
                    if (user) {
                        let token = jwt.sign(
                            { id: user._id, email: user.email, isAdmin: user.isAdmin },
                            SECRET_KEY
                        );
                        return res
                            .status(200)
                            .send({ token: token, isAdmin: user.isAdmin, id: user._id });
                    } else {
                        let salt = await bcrypt.genSalt(10);
                        let hashedpw = await bcrypt.hash(req.body.password, salt);

                        let user = new User({
                            username: req.body.username,
                            email: req.body.email,
                            password: hashedpw,
                        });
                        user = await user.save();
                        let token = jwt.sign(
                            { id: user._id, email: user.email, isAdmin: user.isAdmin },
                            SECRET_KEY
                        );
                        req.session._id = user._id;
                        return res
                            .status(200)
                            .send({ token: token, isAdmin: user.isAdmin, id: user._id });
                    }
                }
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
    }
});

module.exports = router;