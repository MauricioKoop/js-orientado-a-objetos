class pessoa {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }

    setName(newName) {
        this._name = newName;
    }

    setAge(newAge) {
        this._age = newAge;
    }
}

let pessoas = new pessoa("Eduardo", 25);
console.log(`Nome: ${pessoas.getName()}, idade: ${pessoas.getAge()}`);

pessoas.setName("Anne");
pessoas.setAge(23);
console.log(`Nome: ${pessoas.getName()}, idade: ${pessoas.getAge()}`);


