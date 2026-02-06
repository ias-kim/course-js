// 전역변수
let x = 10;

// 전역함수
function f() {
  console.log(x); // x -> 10 (전역스코프)
  // 만약 JS가 동적 스코프 언어였다면,
  // x는 20 출력
}

function g() {
  let x = 20;
  f(); // g에서 선언된 내부함수가 아님
}

g();

