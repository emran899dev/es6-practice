class Parent{
    constructor() {
        this.Fname = 'Mostak Ahamed'
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.name = name
    }
    name1() {
        return this.name + ' ' + this.Fname
    }
}
const child = new Child('Emran')
const child1 = new Child('Sayed')
console.log(child,child1);
console.log(child1.name1());