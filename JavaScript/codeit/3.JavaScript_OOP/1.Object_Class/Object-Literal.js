const user = {
  email: "chris123@google.com",
  birthdate: "1992-03-21",
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  },
};

const item = {
  name: "스웨터",
  price: 30000,
};

console.log(user.email);
console.log(user.birthdate);
user.buy(item);
