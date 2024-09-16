function reverseString(str) {
  if (typeof str !== "string"){
    return (`${str} is not a string, please provide string argument`);
  }
  else {
    if (!str.length) return str;
    return reverseString(str.slice(1)) + str.charAt(0);
  }
}

module.exports = { reverseString };