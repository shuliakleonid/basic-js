const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnAll = 2 ** disksNumber - 1;
  secondPerTurn = Math.floor(turnAll * 3600 / turnsSpeed);
  let objects = new Object()
  objects = {
  turns: turnAll,
  seconds: secondPerTurn
  }
  return objects
};
