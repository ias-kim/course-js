// ./gsc/student.js

export default class Student {
  name = undefined;
  age = undefined;
  gender = undefined;

  constructor(argName, argAge, agrGender) {
    this.name = argName;
    this.age = argAge;
    this.gender = agrGender;
  }
}

export class Foo {
    constructor(argName) {
        this.name = argName;
    }
}
