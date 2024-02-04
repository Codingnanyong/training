/// 2. Pure Functions : Parameter에 의해서만 반환 값이 결정되는 함수
/// 1)최소 하나 이상의 Parameter를 받아야함.
/// 2) 값이나 다른 함수를 반환 해야함.
/// 3) Parameter나 Function 밖에 있는 다른 변수를 변경하거나, 입출력을 수행 하면 안됨.

// Not-Pure Function
const frederick ={
    name : "Frederick Douglass",
    canRead : false,
    canWrite : false
};

function selfEducate(){
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}

selfEducate();
console.log(frederick);

// Pure Function
const selfEducate1 = (person) => ({
    ...person,
    canRead : true,
    canWrite : true
});

console.log(selfEducate1(frederick));
console.log(frederick);