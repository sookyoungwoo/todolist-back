const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let todo = [];

app.get("/", (req, res) => {
  res.render("index", { todo: todo });
});

app.post("/addTask", (req, res) => {
  todo.push(req.body.add);
  res.redirect("/");
});

app.post("/deleteTask", (req, res) => {
  const del = req.body.del;
  todo.splice(del, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
