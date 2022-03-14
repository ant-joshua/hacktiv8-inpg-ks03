var animals = [
  "lion",
  "tiger",
  "elephant",
  "monkey",
  "giraffe",
  "penguin",
  "zebra",
  "kangaroo",
];

/**
 * Push
 */
animals.push("crocodile");

console.log("push", animals);

/**
 * Pop
 */
animals.pop();

console.log("pop", animals);

/**
 * Shift
 */
animals.shift();

console.log("shift", animals);

/**
 * Unshift
 */
animals.unshift("crocodile");

console.log("unshift", animals);

/**
 * Sort
 */
animals.sort();

console.log("sort", animals);

/**
 * Slice
 */
// animals.slice(1, 1);
console.log("slice", animals.slice(1, 2));

/**
 * Splice
 */
animals.splice(1, 1);

console.log("splice", animals);

/**
 * Join
 */
const hasilJoin = animals.join(",");
console.log("join", hasilJoin);

/**
 * Split
 */
const hasilSplit = hasilJoin.split(",");
console.log("split", hasilSplit);

// animals.
