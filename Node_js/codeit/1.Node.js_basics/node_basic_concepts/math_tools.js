// exports Before
// exports.PI = 3.14;
// exports.add = function add(a, b) {
//   return a + b;
// };
// exports.subtract = function subtract(a, b) {
//   return a - b;
// };
// exports.multiply = function multiply(a, b) {
//   return a * b;
// };
// exports.divide = function divide(a, b) {
//   return a / b;
// };

// improve
let calculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = calculator;
