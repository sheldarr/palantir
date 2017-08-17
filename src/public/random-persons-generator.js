const RandomPersonsGenerator = (function () {
    function RandomPersonsGenerator() {
        this.chance = new Chance();
    }

    RandomPersonsGenerator.prototype.generate = (quantity) => {
        const persons = [];

        for (let i = 0; i < quantity; i++) {
            persons.push({
                name: chance.name(),
                age: chance.age(),
                gender: chance.gender()
            })
        }
        return persons
    };

    return RandomPersonsGenerator;
}());