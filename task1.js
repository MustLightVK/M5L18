class Information {
    constructor (firstName, lastName, age, film, animal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.film = film;
        this.animal = animal;
    }
}

const man = new Information('Vlad', 'Kazanin', 23, ['The Hobbit', 'Criminal City'], true)
console.log(man);