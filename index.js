const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home")
})

//http://localhost:3000/r/dogs
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit })
})

//http://localhost:3000/rand
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; 
    //goal is to move as much logic out of .ejs files and put it in here instead
    res.render("random", { rand: num })
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})