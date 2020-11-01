const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const num = 0.693;

module.exports = function dateSample(sampleActivity ) {
  if (typeof sampleActivity !== "string") return false;
  if (+sampleActivity === false || Boolean(+sampleActivity) === false) return false;
  let i = parseFloat(sampleActivity);
  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) return false;
  let k = num / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / i) / k;
  return t > 0 && t !== Infinity ? Math.ceil(t) : false;

  
};
