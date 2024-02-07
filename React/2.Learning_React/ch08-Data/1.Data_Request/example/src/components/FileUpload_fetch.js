const formDate = new FormData();
formDate.append("username", "moontahoe");
formDate.append("fullname", "Alex Banks");
formDate.append("avatar", imgFile);

fetch("/create/user", {
  method: "POST",
  body: formDate,
});
