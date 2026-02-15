class Student{ constructor(argAge) {this.age = argAge;}}

const myList = [];

myList.push(new Student(20));
myList.push(new Student(30));
myList.push(new Student(40));

// 메서드 체이닝을 이용시 쉽게 구현가능 (MRO에서도 사용)
const newnewList= myList.filter(v => v.age > 20).map(value => value.age);
console.log(newnewList);