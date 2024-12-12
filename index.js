const express = require("express");
const path = require("node:path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const messages = [
  {
    text: "Believe you can and you're halfway there.",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "The only way to do great work is to love what you do.",
    user: "Charles",
    added: new Date(),
  },

  {
    text: "You are never too old to set another goal or to dream a new dream.",
    user: "Eleanor",
    added: new Date(),
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    user: "Liam",
    added: new Date(),
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    user: "Harper",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { user, message } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
