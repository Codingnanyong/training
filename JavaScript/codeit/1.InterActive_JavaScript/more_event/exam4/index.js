const input = document.querySelector("#input");

function checker() {
  const words = document.querySelectorAll(".word");
  if (words.length === 0) {
    alert("Success!👏");
    if (confirm("retry?")) {
      window.location.reload();
    }
  }
}

// 여기에 코드를 작성하세요
input.addEventListener("input", function () {
  const inputValue = input.value.trim();

  document.querySelectorAll(".word").forEach(function (word) {
    const wordText = word.textContent.trim();

    if (inputValue === wordText) {
      word.remove();
      checker();
      input.value = "";
    }
  });
});
