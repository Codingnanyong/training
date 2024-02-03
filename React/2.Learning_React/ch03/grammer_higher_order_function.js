/// 4. higher order function
/// 1) 다른 함수를 조작할 수 있는 함수
/// 2) 다른 함수를 인자로 받을 수 있거나 함수를 반환 할 수 있고, 떄로는 2가지를 모두 수행

const invokeIf = (condition , fnTrue,fnFasle) =>
    (condition) ? fnTrue() : fnFasle();
const showWelcome = () => 
    console.log("Welcome!");
const showUnauthorized = () => 
    console.log("Unauthorized");

invokeIf(true,showWelcome,showUnauthorized); // "Welcome"
invokeIf(false,showWelcome,showUnauthorized); // "Unauthorized"

/// 커링 (Currying) : 어떤 연산을 수행할 때 필요한 값 중 일부를 저장하고 나중에 나머지 값을 전달 받는 기법
// Currying Example
const userLogs = userName => message =>
    console.log(`${userName}->${message}`);
const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
getFakePerson(20).then(
    menubar => log(`successfully loaded ${menubar.length} member`),
    error => log("encountered an error loading members")
);