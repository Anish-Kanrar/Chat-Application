# 💬 Mini Chat App

A simple WhatsApp-like chat application built with **Node.js**, **Express**, and **MongoDB**. Users can create, view, edit, and delete chat messages in a clean interface powered by **EJS** and styled using **CSS**.

---

## 🚀 Features

- 📝 Create new chat messages  
- 💬 View all messages in a responsive UI  
- ✏️ Edit existing messages  
- 🗑️ Delete unwanted messages  
- 🎨 UI styled with CSS and rendered using EJS

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Templating Engine**: EJS  
- **Styling**: CSS

---

## 📁 Folder Structure

mini-chat-app/
│
├── models/ # Mongoose schema
│ └── chat.js
│
├── public/ # Static assets (CSS)
│ └── style.css
│
├── views/ # EJS templates
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
│
├── index.js # Main Express server file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

---

## ▶️ Getting Started (Run Locally)

### Prerequisites:
- Node.js installed
- MongoDB running locally or via cloud (e.g., MongoDB Atlas)

### Steps:

```bash
# 1. Clone the repository
git clone https://github.com/Anish-Kanrar/Chat-Application.git
cd Chat-Application

# 2. Install dependencies
npm install

# 3. Start MongoDB server (if local)
mongod

# 4. Run the server
node index.js
# or with nodemon (for auto-restart on changes)
npx nodemon index.js

Open your browser and visit:
👉 http://localhost:8000

👤 Author
Anish Kanrar
🔗 GitHub Profile