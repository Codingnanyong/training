const express = require("express");

const app = express();

// let members = require("./members");

const db = require("./models");

const { Member } = db;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.query);
  next();
});

app.get("/api/members", async (req, res) => {
  //   res.send("<h1>Hello Express</h1>");
  //   res.send(members);
  const { team } = req.query;
  if (team) {
    // const teamMembers = members.filter((m) => m.team === team);
    const teamMembers = await Member.findAll({ where: { team: team } });
    res.send(teamMembers);
  } else {
    const members = await Member.findAll();
    res.send(members);
  }
});

app.get("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  // * use array
  // const member = members.find((m) => m.id === Number(id));
  const member = await Member.findOne({ where: { id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no with the id" });
  }
});

app.post("/api/members", async (req, res) => {
  //   console.log(req.body);
  const newMember = req.body;
  const member = Member.build(newMember);
  await member.save();
  // * use array
  // members.push(newMember);
  res
    .status(201)
    .send({ message: "Member added successfully", member: newMember });
});

// * Update
// app.put("/api/members/:id", async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   // * use array
//   // const member = members.find((m) => m.id === Number(id));
//   // if (member) {
//   //   Object.keys(newInfo).forEach((prop) => {
//   //     member[prop] = newInfo[prop];
//   //   });
//   //   res.send(member);
//   // } else {
//   //   res.status(404).send({ message: "There is no member with the id!" });
//   // }
//   const result = await Member.update(newInfo, { where: { id } });
//   if (result[0]) {
//     res.send({ message: `${result[0]} row(s) affected` });
//   } else {
//     res.status(404).send({ message: "There is no member with the id" });
//   }
// });

// improve Update
app.put("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id } });
  Object.keys(newInfo).forEach((prop) => {
    member[prop] = newInfo[prop];
  });
  await member.save();
  res.send(member);
});

app.delete("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  // * use array
  // const membersCount = members.length;
  // members = members.filter((member) => member.id !== Number(id));
  // if (members.length < membersCount) {
  //   res.send({ message: "Deleted" });
  // } else {
  //   res.status(404).send({ message: "There is no member with the id!" });
  // }
  const deleteCount = await Member.destroy({ where: { id } });
  if (deleteCount) {
    res.send({ message: `${deleteCount} row(s) deleted` });
  } else {
    res.status(404).send({ message: "There is no member with the id!" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
