const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config()
const home = require("./routes/home");
const cats = require("./routes/cats");
const CattyLove = require("./routes/adminCattyLove");
const auth = require("./routes/auth");
const users = require("./routes/users");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to db Successfully..."))
.catch((err) => console.log("Error connecting to the db :", err));

app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/api/cats', cats);
app.use("/api/cattylove",CattyLove);
app.use("/api/auth", auth);
app.use("/api/users", users);

app.listen(process.env.PORT, () => {
    console.log("Started Listning on Port :" + process.env.PORT);
});