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

router.get("/:id", async (req, res) => {
    let requestedID = req.params.id;
    let cat = await Cat.findById(requestedID);
    if(!cat) {
        return res.status(404).send("The cat you are looking for does not exist");
    }
    return res.send(cat);
});

module.exports = router;