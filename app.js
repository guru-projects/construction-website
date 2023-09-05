const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Connecting to the database using mongoose.
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://guru:FfotG2CSTqJ2lJvd@cluster0.evtv81e.mongodb.net/?retryWrites=true&w=majority"); 
console.log(" Connected to constructionDB... ");
 
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
    User.find().then(users => {
        res.render("blogPages/1", {
            users: users
            });
    })
});
app.get("/2", function(req, res) {
    res.render("blogPages/2");
});
//Creating a mongoose model based on this Schema :
 
const User = mongoose.model("User", userSchema);

app.post("/1", function(req, res) {
    console.log("user");
    const user = new User({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User added to DB.');
        res.redirect("/1");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("connected to port 3000")
});