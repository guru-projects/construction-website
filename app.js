const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Connecting to the database using mongoose.
// mongodb+srv://guru:FfotG2CSTqJ2lJvd@cluster0.evtv81e.mongodb.net/
// mongodb://127.0.0.1:27017/constructionDB
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://guru:FfotG2CSTqJ2lJvd@cluster0.evtv81e.mongodb.net/"); 
console.log(" Connected to MONGODB... ");
 
const userSchema = new mongoose.Schema({
  name : String,
  content : String
});

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/home", function(req, res) {
    res.render("home");
})

app.get("/house", function(req, res) {
    res.render("house");
})

app.get("/interior", function(req, res) {
    res.render("interior");
})

app.get("/property", function(req, res) {
    res.render("property");
})

app.get("/swimming", function(req, res) {
    res.render("swimming");
})

app.get("/blog", function(req, res) {
    res.render("blog");
})

app.get("/contact", function(req, res) {
    res.render("contact");
})
app.get("/1", function(req, res) {
    User1.find().then(users => {
        res.render("blogPages/1", {
            users: users
            });
    })
});
app.get("/2", function(req, res) {
    User2.find().then(users => {
        res.render("blogPages/2", {
            users: users
            });
    })
});
app.get("/3", function(req, res) {
    User3.find().then(users => {
        res.render("blogPages/3", {
            users: users
            });
    })
});
//Creating a mongoose model based on this Schema :
 
const User1 = mongoose.model("User1", userSchema);
const User2 = mongoose.model("User2", userSchema);
const User3 = mongoose.model("User3", userSchema);

app.post("/1", function(req, res) {

    const user = new User1({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User1 added to DB.');
        res.redirect("/1");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/2", function(req, res) {
    
    const user = new User2({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User2 added to DB.');
        res.redirect("/2");
    })
    .catch(err => {
        res.status(400).send("Unable to save User to database.");
    });
});
app.post("/3", function(req, res) {

    const user = new User3({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User3 added to DB.');
        res.redirect("/3");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("connected to port 3000")
});