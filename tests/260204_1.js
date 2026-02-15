class Student { // 클래스
    name = undefined;
    constructor(argName) {this.name = argName;}
}

const std1 = new Student("gsc"); // 참조변수
const std2 = new Student("yju"); // 참조변수

// 함수
function setName(argStd, argName) {
    argStd.name = argName;
}
console.log(`Std1: ${std1.name} \t Std2: ${std2.name}`);

setName(std1, "GSC Hello!"); // 참조변수
setName(std2, "YJU Hello!"); // 참조변수

console.log(`Std1: ${std1.name} \t Std2: ${std2.name}`);


let myList = [10, 20, 30];

myList.filter((v) => {

});

myList.forEach((v) => {
    console.log("-"*50);
    console.log(v);
});


const newList = myList.map(v => v * 10);
console.log(myList, newList) // 임뮤털

// js의 map처럼 깊은 복사
function map(argList, argFn) {
    let newList = [];
    for (index in argList) {
        newList.push(argFn(argList[index]))
    }
    return newList;
}

// map(myList, value => value * 10);
// console.log(myList);