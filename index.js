const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const { METHODS } = require("http");
// const { log } = require("console");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection succcessful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://test:LPnGeO6Piue3OssG@test.w9dl7xz.mongodb.net/?retryWrites=true&w=majority&appName=test');
}

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index", { chats })
})

//New Route
app.get("/chats/new", (req, res) => {
    res.render("new");
})

//Create Route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })

    newChat
        .save()
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) => {
            console.log(err);
        });

    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

//Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    console.log(newMsg);

    try {
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        console.log(err);
        res.send("Update failed");
    }
});


//Destroy Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats")
});
/*
let chat1 = new Chat({
    from:"Virat",
    to:"Anushka",
    msg :"send me your picture",
    created_at: new Date(), //UTC
});
chat1.save().then((res) => {
    console.log(res);
});
*/

// app.get("/", (req, res) => {
//     res.send("root is working");
// })
app.get("/", (req, res) => {
    res.redirect("/chats");
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is listing on port 8000");
})
