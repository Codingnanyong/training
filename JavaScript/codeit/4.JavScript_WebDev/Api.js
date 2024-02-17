const newMember = {
  name: "Ryu",
  email: "ryu@codeit.com",
  department: "dev",
};

fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  body: JSON.stringify(newMember),
}).then(() => {
  fetch("https://learn.codeit.kr/api/members")
    .then((response) => response.text())
    .then((result) => {
      const members = JSON.parse(result);
      console.log(members[members.length - 1]);
    });
});
