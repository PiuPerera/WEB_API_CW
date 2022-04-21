const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.send("Wellcome to CattyLove");
});

module.exports = router;