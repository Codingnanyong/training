// 함수 선언
function logCompliment(){
    console.log("Good Job");
}

logCompliment();

// 함수표현식
var tmp = function(){
    alert("hi!");
};

tmp(); // TypeError

// 인수 넘기기(Parameter)
const logCompliment = function(firstName){
    console.log(`Good Job! ${firstName}`)
};

// 값 반환하기
const createCompliment = function(firstName,message){
    return `${firstName} : ${message}`
};

createCompliment("ryu","good!");
console.log(createCompliment("ryu","good!"));

// 1. Default Parameter
function logActivity(name = "Ryu" , activity = "tennis"){
    console.log(`${name} is like ${activity} `);
}

const defaultPerson = {
    name : {
        first : "TaeHyeon",
        last :"Ryu"
    },
    favActivity : "Tennis"
};

function logActivity(p=defaultPerson){
    console.log(`${p.name.first} like ${p.favActivity}`);
}

// 2. Arrow Function
const lordify = firstName =>`My First name is ${firstName}`;

// 3. Return Object
const person = (firstName,lastName) =>({
    first : firstName,
    last : lastName
});
console.log(person("taehyeon","ryu"));