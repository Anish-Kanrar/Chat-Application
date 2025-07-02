# 💬 Mini WhatsApp Chat App

A simple Node.js + Express + MongoDB-based mini WhatsApp-like chat application where users can create, view, edit, and delete messages.

---

## 🚀 Features

- Create new chat messages 📝  
- View all messages in a clean UI 💬  
- Edit or delete existing messages ✏️🗑️  
- Styled with CSS and served via EJS templates 🎨  

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Templating**: EJS  
- **Styling**: CSS  

---

## 📁 Folder Structure

mini-whatsapp-chat/
│
├── models/ # Mongoose schema
├── public/ # Static CSS files
│ └── style.css
├── views/ # EJS templates
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
├── index.js # Main Express server
├── package.json
└── README.md # This file


---

## ▶️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/mini-whatsapp-chat.git
cd mini-whatsapp-chat

# 2. Install dependencies
npm install

# 3. Start MongoDB (if not already running)
# e.g. for local MongoDB: mongod

# 4. Run the server
node index.js
# or with nodemon
nodemon index.js

# App runs on: http://localhost:8000

👤 Author
Anish Kanrar
GitHub Profile

