/// 5. recursion
const countdown = (value,fn) => {
    fn(value);
    return (value > 0) ? countdown(value-1,fn) : value;
};
countdown(10,value => console.log(value));

// countdown timer
const countdown_timer = (value,fn) => {
    fn(value);
    return (value > 0) ? setTimeout(() =>countdown_timer(value-1,fn) ,delay) : value;
};
const log = value => console.log(value);
countdown_timer(10,log);

// HTML DOM
const dan = {
    type : "person",
    data : {
        gender : "male",
        info : {
            id : 22,
            fullname : {
                first : "Dan",
                last : "Deacon"
            }
        }
    }
};
console.log(deepPick("type",dan)); //"person"
console.log(deepPick("data.info.fullname.first",dan)); // "Dan"
/// deepPick : 값을 반환하거나 자기자신을 재귀 호출한다.
const deepPick = (feilds,object = {}) =>{
    const [first,...remaining] = feilds.split(".");
    return (remaining.length) ? deepPick(remaining.join("."),object[first]) : object[first];
}