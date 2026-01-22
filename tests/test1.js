class A {
    constructor() {this.x = 1;}
    f() { console.log(this.x);}
}

const a = new A();

setTimeout(() => a.f(), 0);
