const axios = require("axios").default;

/**
 * Get Data Provinsi Covid
 * @returns
 */
async function getDataProvinsiCovid() {
  try {
    const url = "https://data.covid19.go.id/public/api/prov.json";

    const response = await axios.get(url);
    // console.log(response);
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

async function getDataCovid() {
  try {
    const url = "https://data.covid19.go.id/public/api/update.json";

    const response = await axios.get(url);
    // console.log(response);
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
exports.getDataProvinsiCovid = getDataProvinsiCovid;
exports.getDataCovid = getDataCovid;
