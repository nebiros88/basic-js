const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  let firstLetter = '';
  members.forEach(el => {
    if (typeof el === 'string') {
      let str = el.trimLeft();
      firstLetter += str[0];
    }
  })
  result = firstLetter.toUpperCase();
  return (result.split('').sort().join(''));
};
