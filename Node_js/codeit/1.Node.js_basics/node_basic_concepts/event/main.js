const EventEmitter = require("events");

const emitter = new EventEmitter();

// 여기에 코드를 작성하세요
emitter.on("codeit", () => {
  console.log("I love Programming!");
});

emitter.emit("codeit");
