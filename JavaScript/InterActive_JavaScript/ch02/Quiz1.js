const doingList = document.querySelector("#doing-list");
const doneList = document.querySelector("#done-list");

console.log(
  doneList.parentElement.firstElementChild.nextElementSibling.children[3]
);
console.log(doneList.lastElementChild.parentElement.children[3]);
console.log(doingList.children[2].nextElementSibling);
console.log(doingList.parentElement.children[1].children[3]);
