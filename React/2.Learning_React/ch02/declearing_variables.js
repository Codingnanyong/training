// 기존 변수 선언 방식
var pizza = true;
pizza = false;
console.log(pizza); //false

// 1. const : 값의 재설정 불가능
const pizza = true;
pizza = false; // Error

// 2. let : 구문적인 변수 영역 규칙
var topic = "JavaScript";

if(topic){
    let topic = "React";
    console.log('Block',topic); // topic : React
}
console.log('global',topic); // topic : JavaScript

// 3. Template String : 문자열 연결을 대신해서 사용

var string = "name is " + firstName + "!!";

var template = `My Name is ${firstName}!!`