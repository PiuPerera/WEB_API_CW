const express = require("express");
const { rawListeners } = require("../models/cat");
const Cat = require("../models/cat");
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        let cats = await Cat.find().sort({name : "asc"});
        return res.send(cats);
    }
    catch(err){
        return res.status(500).send("Error :", err.message);
    }
});

module.exports = router;