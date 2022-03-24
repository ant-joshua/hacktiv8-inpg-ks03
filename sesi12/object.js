const siswa = {
  nama: "Rizki",
  umur: 20,
  keterangan: "Siswa baru",
  kelas: "XI RPL 2",
};

const siswa2 = {
  nama: "Rizki",
  umur: 20,
  keterangan: "Siswa baru",
  kelas: "XI RPL 2",
  ambilUmur: function () {
    return this.umur;
  },
};

const siswa3 = siswa;

// siswa["nama"] = "Adam";

// siswa.console.log(siswa);

console.log(siswa2.ambilUmur());
