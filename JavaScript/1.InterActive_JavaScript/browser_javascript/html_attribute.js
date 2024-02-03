// quiz 1.
// const toDoList = document.querySelector("#to-do-list");
// toDoList.deleteAttribute("class");

// const title = document.querySelector('.title');
// title.nextElementSibling.setAttribute('class', undefined);

// // 속성 삭제 메서드
const main = document.querySelector(".main");
main.lastElementChild.removeAttribute("class");

// const el = document.querySelector('body').firstElementChild;
// el.lastElementChild.getAttribute('class') = undefined;

// const toDoList = document.querySelector("#to-do-list");
// const item = toDoList.firstElementChild;

// quiz2.
const el = document.createElement("a");
el.setAttribute("href", "https://www.codeit.kr/");
el.textContent = item.textContent;
item.innerHTML = el.outerHTML;

console.log(item);
