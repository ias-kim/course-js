let p1 = new Promise(
    (resolve, reject) => {
        resolve("resolve!"); // resolve (reject)
    }
);


let p2 = p1.then(
    (result) => {
    console.log('p1 - resolve');
    throw new Error('33');
}, (error) => {
    console.log('p1 - reject')
    return Promise.resolve();
})// thne 현재 프로미스에 res, rej의 알고리즘을 등록하는 역할이며, 새로운 프로미스 객체를 생성하며 이전 프로미스를 체이닝한다.
// 프로미스의 다음 상태에 어떻게 갈지는 사용자가 직접 정의해 설정을 해야한다.

p2.then(
  (result) => {
    console.log("p2 - resolve");
  },
  (error) => {
    console.log("p2 - reject");
  },
);


console.log(p2 instanceof Promise);

