class Person {
    constructor(Name, Age, Gender){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
    }

    getName = () => {
        return this.Name;
    };
    getAge = () => {
        return this.Age;
    };
    getGender = () => {
        return this.Gender
    }
}

class House {
    constructor(address, price, residents){
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => {
        return this.address;
    }
    getPrice = () => {
        return this.price;
    }
    getResidents = () => {
        return this.residents;
    }
    addResident = (resident) => {
       this.residents.push(resident);
    }
}

let Person1 = new Person("Mike", 34, "Male")

