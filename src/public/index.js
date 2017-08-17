const generator = new RandomPersonsGenerator();

const persons = generator.generate(8);

const personsTable = document.getElementById('persons');

for(let i = 0; i < persons.length; i++) {
    const personRow = personsTable.insertRow();
    
    const nameCell = personRow.insertCell();
    const ageCell = personRow.insertCell();
    const genderCell = personRow.insertCell();

    nameCell.innerHTML = persons[i].name;
    ageCell.innerHTML = persons[i].age;
    genderCell.innerHTML = persons[i].gender;
}

