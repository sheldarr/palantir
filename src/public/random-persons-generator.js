const RandomPersonsGenerator = (function () {
    function RandomPersonsGenerator() {
        this.chance = new Chance();
    }

    RandomPersonsGenerator.prototype.generate = (quantity) => {
        return chance.name();
    };

    return RandomPersonsGenerator;
}());