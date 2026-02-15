
let myList = [10, 20, 30];

// 배열을 순회한다.
// 순회하면서 실행할 알고리즘은 사용자 정의에 따라..
function forEach(argList, argFn) {
    // 배열을 순회 첫 번째 = 마지막까지
    for (const value of argList) {
        // 사용자 알고리즘 실행
        argFn(value);
    }
}

const a = ((argValue) => {
    console.log(argValue);
})

forEach(myList, a);


// 배열을 순회..
// 순회하면서... 실행할 알고리즘은
// 각 요소 값을 사용자 함수에 입력하고,
// 이때 반환하는 값을 각 요소로 전환
function map(argList, argFn) {
    // 배열 순회
    for (index in argList) {
      // 사용자 함수의 반환 값을 현재 요소 값으로 치환
      // 이때, 사용자 함수 호출 시, 현재 요소값을 전달
        argList[index] = argFn(argList[index]);
    }
}

map(myList, (argValue) => argValue * 10); // 인자값이 하나 화살표 함수, 바로 리턴 가능

console.log(myList); // 100, 200, 300

let bar = 3;
function addOne(argBar) {
    let bar = argBar + 1;
    return bar;
}

console.log(addOne(bar), bar);