const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let tempStr = new String(str);
  let repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let separator = (options.separator === undefined) ? '+' : new String(options.separator);
  let addition = (options.addition === undefined) ? '' : new String(options.addition);
  let additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;
  let additionSeparator = (options.additionSeparator === undefined) ? '|' : new String(options.additionSeparator);
  let finalStr = '';
  for(let i = 0; i < additionRepeatTimes; i++) {

    tempStr += addition;
    if(i < additionRepeatTimes - 1) tempStr += additionSeparator;

  }
  for(let i = 0; i < repeatTimes; i++) {
    finalStr += tempStr;
    if(i < repeatTimes - 1) finalStr += separator;
  }
  return finalStr;
};


  