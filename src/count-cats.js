const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  let example = '^^';
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === example) {
        counter++;
      }
    }
  }
  return counter;
};
