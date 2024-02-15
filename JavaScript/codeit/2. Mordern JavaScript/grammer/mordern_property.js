// 1. quiz

const brand = "Apple";

const ipad = {
  brand,
  title: "iPad",
};

function getAge() {
  const date = new Date();
  return date.getFullYear() - this.birth + 1;
}

const user = {
  getAge,
  name: "codeit",
  birth: 2017,
};

const user = {
  name: "codeit",
  birth: 2017,
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};

// 2. quiz
const propertyName = "birth";
const getJob = () => "job";

const codeit = {
  ["topic" + "Name"]: "Modern JavaScript",
  [propertyName]: 2017,
  [getJob()]: "프로그래밍 강사",
};
