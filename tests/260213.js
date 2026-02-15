// 프로미스는 왜 나왔을까 ?  -> 콜백지옥을 벗어나며 Executor Function(비동기 처리)을 이용해 성공과 실패를 사용자 정의용 함수를 생성하며 해당 함수에 등록(then).


let p1 = new Promise(
    // Executor function -> 프로미스 생성 시 즉시 실행
    // 비동기 작업을 "시작"하고, 기다리지는 않음
    // 작업이 언젠가 완료되면 resolve(value) 또는
    // reject (error)를 호출하도록 연결
    (resolve, reject) => {
        console.log('Executor function is invoked!')

        setTimeout(() => {console.log('모라')},1000)
        resolve("heello", resolve);
    }
)


// p -> when sucess: (result)
// p -> when fail: (error)

p1.then((result) => {console.log("s" + result);}, (error) => {console.log('f' + error)});

new Promise((resolve, reject) => {
    // 선택에 따라서 호출이 다르게 됨.
    //resolve('hello');
    //reject(executor: f);


}).then(
    (result) => {
        console.log(`then-s: ${result}`);
    }, 
    (error) => {
        console.log(`then-f: ${error}`)
        return Promise.reject('reject - then '); // 이전에 넘어온 프로미스 객체가 catch 하고자하면 reject 객체를 넘어오면 실행하게 설계뙤어 있음.
    },
).catch( // catch란? Exception Handling (예외처리) 예외 객체가 발생했을 떄 실행하며 자브스크립트 엔진에게 넘어가며 catch문 안에 있는 로직을 실행함.
    (error) => console.log(`catch: ${error}`) // 어디든 상관없이 예외가 발생할때 catch가 실행
).finally(
    () => console.log(`finally: `)
);

// const box = fetch('url');
// console.log(box);
