function makeDealy(argMs) {
    let endTime = Date.now() + argMs;
    console.log(Date.now(), endTime)
    while (Date.now() < endTime) {}
}

// 코드를 실행하는 역할은 쓰레드
console.log('10');

console.log("20");

// 비동기 작업 블로킹 되지 않고, 메인 스레드의 작업이 전부 완료될 시 실행.
setTimeout(() => {console.log('20')}, 2000);

console.log("30");

makeDealy(5000);

console.log("40");