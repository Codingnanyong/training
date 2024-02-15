const printJS = function () {
  console.log("JavaScript");
};

console.dir(0);
console.dir("codeit");
console.dir(true);
console.dir(null);
console.dir(undefined);
console.dir({});
console.dir([]);
console.dir(printJS);

// const myObject = {
//   brand: 'Codeit',
//   bornYear: 2017,
//   isVeryNice: true,
//   sayHi: function(name) {
//     console.log(`Hi! ${name}`);
//   }
// };

// myObject.sayHi('JavascScript');

// const myArray = [
//   'codeit',
//   2017,
//   true,
//   function(name) {
//     console.log(`Hi! ${name}`);
//   },
// ];

// myArray[3]('Codeit');

// function makeQuiz(quiz, answer, success, fail) {
//   if (prompt(quiz) === answer) {
//     console.log(success());
//   } else {
//     console.log(fail());
//   }
// };

// function getSuccess() {
//   return '정답';
// };

// function getFail() {
//   return '오답!';
// };

// const question = '5 + 3 = ?';
// makeQuiz(question, '8', getSuccess, getFail);

// function getPrintHi() {
//   return function () {
//     console.log('Hi!?');
//   };
// };

// const sayHi = getPrintHi();

// sayHi();
// getPrintHi()();
