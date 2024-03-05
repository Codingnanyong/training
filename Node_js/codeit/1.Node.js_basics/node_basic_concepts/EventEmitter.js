const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const myEmitter2 = new EventEmitter();

myEmitter.on("test", () => {
  console.log("1");
});

myEmitter.on("test", () => {
  console.log("2");
});

myEmitter2.on("test", () => {
  console.log("3");
});

myEmitter.emit("test");
