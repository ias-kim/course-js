

let p = new Promise(
  // Executor 비동기로 실행 함수를 정의
  // 비동기 함수를 호출해야지 스레드가 생성.
  // promise 생성 시 생성자의 인자값으로 들어감.

  // resolve 비동기 작업이 성공했을 때 호출하는 함수
  // reject 비동기 작업이 실패했을 때 호출하는 함수

  // 이 함수는 비동기 함수가 호출을 한다. (비동기 함수에게 일을 던짐.)
  (resolve, reject) => {
    console.log("start");
    setTimeout(() => {
        if(Math.random > 0.5)
            resolve('s');
        else {
            reject('f')
        }
    }, 1000)
    console.log('end')
  },
);

// 프로미스 객체 생성 후 사용자로 부터 받은 함수를 실행한다.

p.then(
  (result) => console.log(result),
  (error) => console.log(error),
);

// p.then(/* OnResolved */ /* OnRejected */);

// let p2 = new Promise();

// // Task A -> Task B -> Task C -> Task D
// p.then().then().then().catch().finally();
