// Higher-order function
// input: fn
// output: fn
// Pros: Abstract and Resuable

function map(argArray, argAddValue) {
  for (let index in argArray) {
    argArray[index] += argAddValue;
  }
}
function map1(argArray, argAddValue) {
  for (let index in argArray) {
    argArray[index] += argAddValue;
  }
  return argArray;
}
function forEach(argArray, argFn) {
  for (let index = 0; index < argArray.length; index++) {
    //console.log(argArray[index]);
    argFn(argArray[index]);
  }
  console.log();
}

let myList = [10, 20, 30, 40];

// 1) 현재 배열의 값을 화면에 출력 하시오
// 10 20 30 40
// forEach(myList, (v) => console.log(`${v}\t`));
forEach(myList, (v) => process.stdout.write(`${v}\t`)); // 줄바꿈을 하지않는 저수준 출력

// 2) 각 배열의 원소에 1을 더하시오 (배열 내 원소값 변경)
// 요소값 변경 11 21 31 41
const f = map1(myList, 1);
f.forEach(v => console.log(v)); // 출력

// 3) 현재 배열의 값을 화면에 출력 하시오
// 11 21 31 41
forEach(myList, (v) => {
  process.stdout.write(`${v}\t`);
});

// 4) 각 배열의 원소에 2를 더하시오 (배열 내 원소값 변경)
// 요소값 변경 13 23 33 43
map(myList, 2);

// 5)현재 배열의 값을 화면에 출력 하시오
// 13 23 33 43
forEach(myList, (v) => {
  process.stdout.write(`${v}\t`);
});
