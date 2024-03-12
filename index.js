const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.get("/view", (req, res) => {
//   res.render("index", { title: "Hey", message: "Hello there!" });
// });

var users = [
  { name: "tobi", email: "tobi@learnboost.com" },
  { name: "loki", email: "loki@learnboost.com" },
  { name: "jane", email: "jane@learnboost.com" },
];

app.get("/user", function (req, res) {
  res.render("users", {
    users: users,
    title: "EJS example",
    header: "Some users",
  });
});


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
