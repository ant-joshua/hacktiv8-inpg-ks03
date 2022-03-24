function encryptPassword(password) {
  //   const removeSpace = password.replace(/\s/g, "");
  const removeSpace = removeSpaces(password);
  const reverse = reverseText(removeSpace);
  const updateVowel = updateVowel(reverse);

  return updateVowel;
}

function generateInvoice(nomer) {
  const date = new Date();

  const reverse = reverseText(Date.toString() + nomer);
  return reverse;
}

function removeSpaces(string) {
  return string.replace(/\s/g, "");
}

function reverseText(string) {
  return string.split("").reverse().join("");
}

function updateVowel(string) {
  return string.replace(/[aeiou]/gi, "*");
}
