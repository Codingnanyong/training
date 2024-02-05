// showTitle 함수를 완성해 주세요
function showTitle(e) {
  if (e.target && e.target.dataset.title) {
    const titleElement = document.createElement("span");
    titleElement.classList.add("title");

    titleElement.textContent = e.target.dataset.title;

    e.target.appendChild(titleElement);
  }
}

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
  if (e.target && e.target.dataset.title) {
    if (e.target.lastChild) {
      e.target.removeChild(e.target.lastChild);
    }
  }
}

// '대상'과 '타입'을 수정해 주세요
document.addEventListener("mouseover", showTitle);
document.addEventListener("mouseout", removeTitle);
