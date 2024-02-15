const quiz = ["YUMMY", "COUNT", "ABUSE", "SOUND", "SWING"];

// awnser 1
const answer = quiz.map((word, i) => {
  return word[i];
});
// awnser 2
const answer = quiz.map((word, i) => word[i]);

// 테스트 코드
console.log(answer);
