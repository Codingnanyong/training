// 1. 구조 분해를 사용한 대입
const sandwitch = {
    bread : "cranch",
    meat : "beaf",
    cheese : "switch",
    toppings : ["tomato","mustard"]
};

const {bread,meat} = sandwitch;

console.log(bread,meat);

const lordify =({firstName})=>{
    console.log(`Conterberry's${firstName}`);
};

const regularPerson ={
    firstName : "TaeHyon",
    lastName : "Ryu"
}

lordify(regularPerson);

// 2. 배열 구조 분해
const [Animal] = ["Dog","Cat","Wombat"];
console.log(Animal); // Dog

const [,,thAnimal] = ["Dog","Cat","Wombat"];
console.log(thAnimal) // Wombat

// 3. 객체 리터럴 개선
const moutin = "Hanra";
const elevation = 9738;

const print = function(){
    console.log(`${moutin}'s high is ${elevation}`);
}

const Hike = {moutin,elevation};

console.log(Hike); // {name : Hanra , elevation : 9738}
Hike.print();

// Old 
var skier = {
    name : name,
    sound : sound,
    powderYell : function(){
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}`);
    },
    speed : function(mph){
        this.speed = mph;
        console.log('Speed : ',mph);
    }
}

// New 
const skier = {
    name: '', 
    sound: '',
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}`);
    },
    speed(mph) {
        this.speed = mph; 
        console.log('Speed: ', mph);
    }
};