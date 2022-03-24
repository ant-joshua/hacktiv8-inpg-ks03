// const hitung = (param1, param2, callback) => {
//   const result = callback(param1, param2);
//   console.log(result);
// };

// const

const luasSegitiga = (alas, tinggi) =>
  new Promise((resolve, reject) => {
    if (alas <= 0 || tinggi <= 0) {
      reject("Alas dan tinggi harus lebih dari 0");
    }
    const luas = (alas * tinggi) / 2;
    resolve(luas);
  });

const masukanNilai = (nama, hasilLuas) => {
  return new Promise((resolve, reject) => {
    if (nama === "") {
      reject("Nama harus diisi");
    }
    resolve(nama + " : " + hasilLuas + "(luas segitiga)");
  });
};

// (async () =>
//   luasSegitiga(5, 0)
//     .then((result) => {
//       console.log(result);
//       masukanNilai("joshua", result)
//         .then((hasil) => {
//           console.log(hasil);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log("error:" + error);
//     }))();

const main = async () => {
  try {
    const hasilLuas = luasSegitiga(5, 10);
    console.log("hasil luas", hasilLuas);
    const hasilMasukanNilai = await masukanNilai("joshua", hasilLuas);
    console.log(hasilMasukanNilai);
  } catch (error) {
    console.log(error);
  }
};

main();

// hitung(10, 20, luasSegitiga);
