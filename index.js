const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000;

// app.use(express.static("public"));
// app.use("/static", express.static("public"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
