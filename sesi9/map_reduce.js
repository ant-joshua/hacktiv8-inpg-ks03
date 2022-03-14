const students = [
  {
    name: "Remy",
    lastname: "testing",
    cohort: "Jan",
    nilai: 80,
    verified: true,
  },
  { name: "Genevieve", cohort: "March", nilai: 75, verified: false },
  { name: "Chuck", cohort: "Jan", nilai: 70, verified: true },
  { name: "Osmund", cohort: "June", nilai: 85, verified: true },
  { name: "Nikki", cohort: "June", nilai: 95, verified: true },
  { name: "Boris", cohort: "June", nilai: 100, verified: true },
];

// const ids = ["20021231", "12312232", "21312346"];

// const someFilter =
//   students.some((student) => student.cohort === "Jan") &&
//   students.some((student) => student.cohort === "June");

// if (someFilter) {
//   console.log(students.filter((student) => student.cohort === "Jan"));

//   console.log(students.filter((student) => student.cohort === "June"));
// }

// console.log(students.some((student) => student.verified === false));

// console.log(students.flat((student) => student.verified === false));

// console.dir();
// for (key of students.keys()) {
//   console.log(key);
// }

// const nilai = [1, 3, 6, 7, 8, 9, 10];

// const sortNilai = students.sort((a, b) => a.nilai - b.nilai);
// console.log(sortNilai);

// const sortDesc = students.sort((a, b) => b.nilai - a.nilai);
// console.log(sortDesc);

const arrayKosong = [];

arrayKosong[0].name = "Remy";
arrayKosong[0].lastname = "testing";

console.log(arrayKosong);

// console.log(students.);

// const findIndex = students.findIndex((student) => student.name === "Boris");
// students.splice(findIndex, 1);

// console.log("students", students);

// const findStudent = students.find((student) => student.name === "Remy");

// console.log("findStudent", findStudent);

// // console.log
// const findStudentByFilter = students.filter(
//   (student) => student.name === "Remy"
// );

// console.log("findStudentByFilter", findStudentByFilter[0]);

// students.push({
//   name: "Fahrian",
//   lastname: "testing",
//   cohort: "Jan",
//   nilai: 90,
// });

// const arrayKosong = [];

// students.forEach((student) => {
//   const objBaru = {
//     name: student.name,
//   };

//   arrayKosong.push(objBaru);
//   console.log(arrayKosong);
// });

// console.log(arrayKosong);

// const mappedStudent = students.map((student) => {
//   //   if (student.lastname) {
//   //     console.log("student.lastname", student.lastname);
//   //   } else {
//   //     console.log("kosong");
//   //   }

//   return {
//     name: student.name + " " + (student.lastname ? student.lastname : ""),
//   };
// });

// console.log("map", mappedStudent);

// const filterResult = students.filter((student) => {
//   return student.lastname != undefined;
//   //   return student.cohort === "Jan";
// });

// console.log("filter", filterResult);

// const reductStudent = students.reduce((acc, curr) => {
//   return acc + curr.nilai;
// }, 0);

// const reductFuncStudent = students.reduce(function (acc, curr) {
//   return acc + curr.nilai;
// }, 0);

// console.log("reduceFunc", reductFuncStudent);

// console.log("nilaiTotal", reductStudent);
// console.log("nilaiRata2", reductStudent / students.length);
