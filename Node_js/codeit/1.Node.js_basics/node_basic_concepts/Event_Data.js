const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// myEmitter.on("test", (arg1, arg2, arg3, arg4) => {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
//   console.log(arg4);
// });

// myEmitter.emit("test", "apple", "banana", "pear");

const obj = { type: "text", data: "Hello CodeIt", date: "2024-03-05" };

myEmitter.on("test", (info) => {
  console.log(info);
});

myEmitter.emit("test", obj);
