const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json"); 
//console.log(redditData);

app.use(express.static(path.join(__dirname, "public")))  //means doesn't matter what directory in, will still run


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/cats", (req, res) => {
    const cats = [
        "Ginger", "Cinnamon", "Christmas", "Ginger 2", "Sapphire", "Franklin"
    ]
    res.render("cats", { cats })
})

//http://localhost:3000/r/dogs
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    //console.log(data);
    if(data){
        res.render("subreddit", { ...data })
    } else {
        res.render("notfound", { subreddit})
    }
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