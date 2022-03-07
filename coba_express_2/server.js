const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const studentList = [
    {
      nama: "Budi",
      kelas: "XI RPL 1",
      jurusan: "RPL",
    },
    {
      nama: "Zahra",
      kelas: "XI Animasi 1",
      jurusan: "Animasi",
    },
    {
      nama: "Andi",
      kelas: "XI Multimedia 1",
      jurusan: "Multimedia",
    },
  ];

  return res.render("pages/index", {
    studentList: studentList,
  });
});

app.get("/json", (req, res) => {
  const studentList = [
    {
      nama: "Budi",
      kelas: "XI RPL 1",
      jurusan: "RPL",
    },
    {
      nama: "Zahra",
      kelas: "XI Animasi 1",
      jurusan: "Animasi",
    },
    {
      nama: "Andi",
      kelas: "XI Multimedia 1",
      jurusan: "Multimedia",
    },
  ];
  res.json({
    data: studentList,
  });
});

app.get("/profil", (req, res) => {
  return res.render("pages/profil");
});

// render contact page
app.get("/contact", (req, res) => {
  // contact form data
  const contact = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  return res.render("pages/contact", {
    contact: contact,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
