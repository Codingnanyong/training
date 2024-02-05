// //함수 선언
// function greetings(sentence){
//   console.log('hi');
//   console.log('안녕');
//   console.log('Hola');
//   console.log('Buongiorno');
//   console.log('Geten Tag!');
//   console.log('你好');
//   console.log('xin chào');
//   console.log(sentence)
// };
// //함수 호출
// greetings('Hola');

function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
};

welcome('codeit');

function printSquare(x) {
  console.log('매개변수');
  console.log(x * x);
};

printSquare(2);

function printSum(num1, num2) {
  console.log('매개변수 여러개');
  console.log(num1 + num2);
};
printSum(10,5);

let x = 10;
let y = 20;

function myFunction(a, b) {
  return a + b;
}

let myAnswer = myFunction('x', 'y');

console.log(myAnswer);