// console.log(Number('1' + '2' + '3') - Number(true));

// console.log(Boolean("false"));
// console.log(Boolean(6 % 2));
// console.log(Boolean(NaN) || Boolean('0'));
// console.log(Boolean(typeof false));


//17.
// console.log(typeof ('4' + 3));
// console.log(typeof (3 - true));
// console.log(typeof (Boolean(5) * true));
// console.log(typeof (true < false));

// console.log(0 !== Number(false));
// console.log(Number(true) == String(1));
// console.log('5' / true != '5');
// console.log(5 % 2 === Boolean(2) * true);

// function calcWage(name, time, wage) {
//   let total = time * wage;

//   console.log(`${name} 님의 근무 시간은 총 ${time} 시간이며, 최종 급여는 ${total} 원 입니다.`); // 코드를 채워 넣으세요.
// }

// calcWage('김윤식', 208, 11340);
// calcWage('성규재', 175, 12160);
// calcWage('손태웅', 161, 13070);
// calcWage('허우선', 222, 10980);

//21.
// let x;
// console.log(x);
// let y = x;
// x = null;
// console.log(y);
// console.log(x);
// x = y;
// console.log(x);
// let x;
// let y = null;

// console.log(x === y);
// console.log(x == y);
// console.log(x == null);
// console.log(y === undefined);


// let output = ''

// for (let i = 0; i < 9; i ++) {
//   for (let j = 0; j < i + 1 ; j++) {
//     output += '*'
//   }
//   output += '\n'
// }

// console.log(output)

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let dan = 1;
// while(dan <= 9){
//   for(let i = 1; i <=9;i++)
//   {
//     let result = dan * i ;
//     console.log(`${dan} * ${i} = ${result}`);
//   }
// }


// function range(start, count, step) {
//   let arr = [];

//   for (let i = 0; i < count; i++) {
//     arr.push(start + i * step)
//   }

//   return arr;
// }

// 테스트 코드
// console.log(range(1, 10, 3));

// let myNumber = 2.37e-2

// console.log(myNumber.toFixed(2));

// console.log(Number((4 * 30 + 3).toString(10)));

// // console.log((123.456).toFixed(0));

// // console.log(1.23e2);

// // console.log(0x7b.toString(10) * 1);
// let x = 'Codeit';
// let y = x;

// y = x + '!';
// x = y.toLowerCase();

// console.log(y);

// let x = ['Kim', 'Na', 'Park', 'Lee'];
// let y = x;

// y.push('Lim');
// x[4] = 'Sung';

// console.log(y);

// let x = {
//   numbers: [1, 2, 3, 4],
//   title: 'Codeit',
// };
// let y = x.numbers;
// let z = x.title;
 
// x.numbers.unshift(5);
// x.title = 'Hello';

// console.log(y);
// console.log(z);

// let x = 1;

// x = 4;

// const y = x;

// y = 3;
// x = 2;

// console.log(x);

let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;

team1.splice(2, 1, 'Trumpet');
team2.splice(2, 1, 'Piano');

console.log(team1);
console.log(team2);