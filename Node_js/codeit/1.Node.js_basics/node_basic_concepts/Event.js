const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("test", () => {
  console.log("Susseces!");
});

myEmitter.emit("test");
