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
console.log("Connected to MONGODB... ");
 
const userSchema = new mongoose.Schema({
  name : String,
  content : String
});

const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    city : String
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

app.get("/blogPage2", function(req, res) {
    res.render("blogPages/blogPage2");
})

app.get("/contact", function(req, res) {
    res.render("contact");
})

app.get("/interiorBlogPage", function(req, res) {
    res.render("blogPages/interiorBlogPage");
})

app.get("/decor", function(req, res) {
    res.render("blogPages/decor");
})

app.get("/homeBlogPage", function(req, res) {
    res.render("blogPages/homeBlogPage");
})

app.get("/apartment", function(req, res) {
    res.render("blogPages/apartment");
})

app.get("/furniture", function(req, res) {
    res.render("blogPages/furniture");
})

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", function(req, res) {
    const contact = new Contact({
        name : req.body.username,
        email : req.body.email,
        phone : req.body.phone,
        city : req.body.city
    })
    contact.save()
    .then( () => {
        console.log("contact added to DB..");
        res.redirect("/contact");
    })
    .catch((err) => {
        res.status(400).send("unable to sent contact" + err)
    })
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
app.get("/4", function(req, res) {
    User4.find().then(users => {
        res.render("blogPages/4", {
            users: users
            });
    })
});
app.get("/5", function(req, res) {
    User5.find().then(users => {
        res.render("blogPages/5", {
            users: users
            });
    })
});
app.get("/6", function(req, res) {
    User6.find().then(users => {
        res.render("blogPages/6", {
            users: users
            });
    })
});
app.get("/7", function(req, res) {
    User7.find().then(users => {
        res.render("blogPages/7", {
            users: users
            });
    })
});
app.get("/8", function(req, res) {
    User8.find().then(users => {
        res.render("blogPages/8", {
            users: users
            });
    })
});
app.get("/9", function(req, res) {
    User9.find().then(users => {
        res.render("blogPages/9", {
            users: users
            });
    })
});
app.get("/10", function(req, res) {
    User10.find().then(users => {
        res.render("blogPages/10", {
            users: users
            });
    })
});
app.get("/11", function(req, res) {
    User11.find().then(users => {
        res.render("blogPages/11", {
            users: users
            });
    })
});
app.get("/12", function(req, res) {
    User12.find().then(users => {
        res.render("blogPages/12", {
            users: users
            });
    })
});
app.get("/:blogId", function(req, res){
    var blogId = req.params.blogId;
    console.log(blogId);
})
//Creating a mongoose model based on this Schema :
 
const User1 = mongoose.model("User1", userSchema);
const User2 = mongoose.model("User2", userSchema);
const User3 = mongoose.model("User3", userSchema);
const User4 = mongoose.model("User4", userSchema);
const User5 = mongoose.model("User5", userSchema);
const User6 = mongoose.model("User6", userSchema);
const User7 = mongoose.model("User7", userSchema);
const User8 = mongoose.model("User8", userSchema);
const User9 = mongoose.model("User9", userSchema);
const User10 = mongoose.model("User10", userSchema);
const User11 = mongoose.model("User11", userSchema);
const User12 = mongoose.model("User12", userSchema);

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
app.post("/4", function(req, res) {

    const user = new User4({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User4 added to DB.');
        res.redirect("/4");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/5", function(req, res) {

    const user = new User5({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User5 added to DB.');
        res.redirect("/5");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/6", function(req, res) {

    const user = new User6({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User6 added to DB.');
        res.redirect("/6");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/7", function(req, res) {

    const user = new User7({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User7 added to DB.');
        res.redirect("/7");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/8", function(req, res) {

    const user = new User8({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User8 added to DB.');
        res.redirect("/8");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/9", function(req, res) {

    const user = new User9({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User9 added to DB.');
        res.redirect("/9");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/10", function(req, res) {

    const user = new User10({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User10 added to DB.');
        res.redirect("/10");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/11", function(req, res) {

    const user = new User11({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User11 added to DB.');
        res.redirect("/11");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});
app.post("/12", function(req, res) {

    const user = new User12({ 
        name: req.body.name,
        content : req.body.content
    })
    user.save().then(() => {
        console.log('User12 added to DB.');
        res.redirect("/12");
      })
      .catch(err => {
        res.status(400).send("Unable to save User to database.");
      });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("connected to port 3000")
});