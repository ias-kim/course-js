import A, { Foo } from "./gsc/student.js";  // 동일한 네임스페이스를 사용하니 충돌을 예방


let stdList = [];
stdList.push(new A("Lee", 38, "M"));
stdList.push(new A("KIM", 28, "M"));
stdList.push(new A("JUNG", 18, "F"));
stdList.push(new A("JEO", 48, "M"));

console.log(stdList.reduce(v => v.gender === "F").forEach(v => console.log(v.age)));
const totlaSum = stdList.filter((v)=> v.gender === "M").reduce((acc, v)=> acc + v.age, 0);
console.log(totlaSum);


console.log(stdList.every(v => v.gender === "M"));

let sortedList = stdList.sort((a, b) => a.age - b.age);

console.log(sortedList);