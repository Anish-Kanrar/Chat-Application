const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection succcessful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Virat",
        to: "Anushka",
        msg: "send me your picture",
        created_at: new Date(), //UTC
    },
    {
        from: "Viru",
        to: "Vnushka",
        msg: "send me your picture",
        created_at: new Date(), //UTC
    },
    {
        from: "Kamal",
        to: "lalu",
        msg: "send me your picture",
        created_at: new Date(), //UTC
    },
    {
        from: "Rahit",
        to: "Hardik",
        msg: "send me your picture",
        created_at: new Date(), //UTC
    }
]
Chat.insertMany(allChats);


