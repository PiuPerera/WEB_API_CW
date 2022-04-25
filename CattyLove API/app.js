const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const home = require("./routes/home");
const cats = require("./routes/cats");
const CattyLove = require("./routes/adminCattyLove");
const auth = require("./routes/auth");
const users = require("./routes/users");

mongoose.connect("mongodb://localhost/cattylovedb")
.then(() => console.log("Connected to db Successfully..."))
.catch((err) => console.log("Error connecting to the db :", err));

const Port = 5000;

app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/api/cats', cats);
app.use("/api/cattylove",CattyLove);
app.use("/api/auth", auth);
app.use("/api/users", users);

app.listen(Port, () => {
    console.log("Started Listning on Port :" + Port);
});