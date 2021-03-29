const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') i++;
        i++;
        break;
      case '--discard-prev':
        if (result.length > 0) result.pop();
        break;
      case '--double-next':
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (result.length > 0) result.push(arr[i - 1]);
        break;
      default: result.push(arr[i]);
    }
  }
  return result;
};

