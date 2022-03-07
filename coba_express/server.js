const express = require("express");
const app = express();
const port = 4000;

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const data = [
    {
      name: "John",
    },
    {
      name: "Mary",
    },
    {
      name: "Peter",
    },
    {
      name: "Sally",
    },
  ];

  res.render("pages/index", {
    dataList: data,
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
