const PERSONS_QUANTITY = 100;

const generator = new RandomPersonsGenerator();

const personsTable = document.getElementById('persons');
const personsRows = []

for(let i = 0; i < PERSONS_QUANTITY; i++) {
    const personRow = personsTable.insertRow();
    
    const nameCell = personRow.insertCell();
    const ageCell  = personRow.insertCell();
    const genderCell  = personRow.insertCell();
    
    personsRows.push({
        nameCell,
        ageCell,
        genderCell 
    });
}

function randomize () {
    const persons = generator.generate(PERSONS_QUANTITY);

    for(let i = 0; i < PERSONS_QUANTITY; i++) {
        personsRows[i].nameCell.innerHTML = persons[i].name;
        personsRows[i].ageCell.innerHTML = persons[i].age;
        personsRows[i].genderCell.innerHTML = persons[i].gender;
    }
    setTimeout(randomize, 0);
}

randomize();