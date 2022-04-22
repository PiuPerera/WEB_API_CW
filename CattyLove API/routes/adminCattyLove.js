const { request } = require("express");
const express = require("express");
const CattyLove = require("../models/cat");
const router = express.Router();
//Transforms the string with the first character in upper cased.
var ucf = require("upper-case-first");

router.get("/", async (req,res) => {
    try{
        let cattylove = await CattyLove.find();
        res.send(cattylove);
    } catch(ex){
        return res.status(500).send("Error",ex.message)
    } 
});


router.get("/:id", async (req,res) =>{
    let requsetedID = req.params.id;
    try{
        let cattylove = await CattyLove.findById(requsetedID);    
        if(!cattylove){
            return res.status(404).send("Cat you are looking for does not excist")
        }
        res.send(cattylove)
    }
    catch(ex) {
        return res.status(500).send("Error",ex.message)
    }
});


router.put("/:id", async (req,res) =>{
    let requsetedID = req.params.id;
    let cattylove = await CattyLove.findById(requsetedID);

    if(!cattylove){
            return res.
            status(404).
            send("Cat you are looking for does not excist")
        }
        cattylove.set({
            name : ucf.upperCaseFirst(req.body.name),
            age :  req.body.age,
            gender : req.body.gender,
            description: req.body.description,
            likeCount: req.body.likeCount,
            proPic: req.body.proPic,
            features: req.body.features,
            contactNo: req.body.contactNo,
            imageUrl: req.body.imageUrl,
            location: req.body.location
        });
    try{
        cattylove = await cattylove.save()
        return res.send(cattylove);
    }
    catch(ex){
        return res.status(500).send("Error",ex.message)
    }
});

 
router.post("/",async (req,res) =>{
    //400 - bad request
    if(!req.body.name){
        return res.status(404).send("Cat's name can not be empty.")
    }
    //411 - length required
    else if(req.body.name.length<3 || req.body.name.length>20){
        return res.status(411).send("Cat's name can not be less than 3 letters or greater than 20 letters.");
    }
    else if (!req.body.age){
        return res.status(404).send("Cat's age can not be empty.")
    }
    else if(!req.body.gender){
        return res.status(400).send("Cat's gender can not be empty.");
    }
    else if(!req.body.description){
        return res.status(400).send("Cat's description can not be empty.");
    }
    else if(req.body.description.length < 10){
        return res.status(400).send("Cat's description can not less than 10 letters.");
    }
    else if(!req.body.proPic){
        return res.status(400).send("Cat's profile picture can not be empty.");
    }
    else if(!req.body.contactNo){
        return res.status(400).send("Location can not be empty.");
    }
    else if(!req.body.location){
        return res.status(400).send("Location can not be empty.");
    }
    let newcattylove = new CattyLove({
        name : ucf.upperCaseFirst(req.body.name),
        age :  req.body.age,
        gender : req.body.gender,
        description: req.body.description,
        likeCount: req.body.likeCount,
        proPic: req.body.proPic,
        features: req.body.features,
        contactNo: req.body.contactNo,
        imageUrl: req.body.imageUrl,
        location: req.body.location,
    });
    try{
        newcattylove = await newcattylove.save();
        return res.send(newcattylove);

    } catch(err) {
        return res.status(500).send(err.message);
    }
});


router.delete("/:id", async (req, res) =>{
    let requsetedID =  req.params.id
    try{
        let cattylove = await CattyLove.findByIdAndDelete(requsetedID)
        if(!cattylove){
            return res.
            status(404).
            send("Cat you are looking for does not excist")
        }
        res.send(cattylove)
    }
    catch(ex){
        return res.status(500).send(ex.message);
    }
});


module.exports = router;