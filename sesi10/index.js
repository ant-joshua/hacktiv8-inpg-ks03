const express = require("express");
const app = express();
const port = 3000;

const { getDataProvinsiCovid, getDataCovid } = require("./ajax");
const { formatNumber } = require("./helper");

app.get("/", async (req, res) => {
  const resultCovid = await getDataCovid();
  const result = await getDataProvinsiCovid();
  console.log(resultCovid);
  const totalData = resultCovid.update.total;

  const listData = result.list_data;
  res.render("index", {
    listData: listData,
    totalData: totalData,
    helpers: {
      formatNumber,
    },
  });
});

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
