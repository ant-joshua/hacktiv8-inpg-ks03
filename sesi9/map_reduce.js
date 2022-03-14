const students = [
  { name: "Remy", lastname: "testing", cohort: "Jan", nilai: 80 },
  { name: "Genevieve", cohort: "March", nilai: 75 },
  { name: "Chuck", cohort: "Jan", nilai: 70 },
  { name: "Osmund", cohort: "June", nilai: 85 },
  { name: "Nikki", cohort: "June", nilai: 95 },
  { name: "Boris", cohort: "June", nilai: 100 },
];

students.push({
  name: "Fahrian",
  lastname: "testing",
  cohort: "Jan",
  nilai: 90,
});

const mappedStudent = students.map((student) => {
  if (student.lastname) {
    console.log("student.lastname", student.lastname);
  } else {
    console.log("kosong");
  }

  return {
    name: student.name + " " + (student.lastname ? student.lastname : ""),
  };
});

console.log("map", mappedStudent);

const filterResult = students.filter((student) => {
  return student.lastname != undefined;
  //   return student.cohort === "Jan";
});

console.log("filter", filterResult);

const reductStudent = students.reduce((acc, curr) => {
  return acc + curr.nilai;
}, 0);

const reductFuncStudent = students.reduce(function (acc, curr) {
  return acc + curr.nilai;
}, 0);

console.log("reduceFunc", reductFuncStudent);

console.log("nilaiTotal", reductStudent);
console.log("nilaiRata2", reductStudent / students.length);
