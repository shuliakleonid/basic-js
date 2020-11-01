const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth( arr ) {
    let howMuchBreaks = 1;
    let flatArr;
    for (let i of arr) {
      if (!Array.isArray(i)) {
      continue;
    }
    flatArr = this.calculateDepth(i)+1;
      if (flatArr > howMuchBreaks){
        howMuchBreaks = flatArr;
      } 
    }
    return howMuchBreaks;
  }
};