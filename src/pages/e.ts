class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    set Name(name) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    set Age(age) {
        this.age = age;
    }

    get Age() {
        return this.age;
    }

    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
export default Person;