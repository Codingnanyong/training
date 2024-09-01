// default
var log = function(message){
    console.log(message);
}

log(`Insert into a variable to operate on in JavaScript`);

// improve
const log = message=>{
    console.log(message);
}

const obj = {
    message :"test",
    log(message){
        console.log(message);
    }
}

obj.log(obj.message);

const message = [
    "Insert into a array to operate too",
    message => console.log(message),
    "Normal value same",
    message => console.log(message)
]

message[1](message[0]);
message[3](message[2]);

/// JavaScript에서는 함수로 작성을 하는 것이 좋다
/// JavaScript === Functional Type Language!