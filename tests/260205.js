class Student {
    // private 변수
    #name = undefined;
    #age = undefined;
    constructor(argName, argAge) {
        this.#name = argName;
        this.#age = argAge
    }

    get name() {return this.#name;}
    get age() {return this.#age;}
    set name(argName) { this.#name = argName + " Hello";}
    set age(argAge) {this.#name = `Age: ${argAge}`;}
}

let std1 = new Student("gsc", 20);
print(std1.name, std1.age); // OK
std1.name =" YJC", std1.age=20
print(std1.name, std1.age); // OK