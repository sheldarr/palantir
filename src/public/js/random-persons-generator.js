const RandomPersonsGenerator = (function () {
    function RandomPersonsGenerator() {}

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

    RandomPersonsGenerator.prototype.mutate = (persons, mutationChance) => {
        for (let i = 0; i < persons.length; i++) {
            if(Math.random() < mutationChance) {
                persons[i].name = chance.name();
            }
            if(Math.random() < mutationChance) {
                persons[i].age = chance.age();
            }
            if(Math.random() < mutationChance) {
                persons[i].gender = chance.gender();
            }
        }
        return persons
    };

    return RandomPersonsGenerator;
}());