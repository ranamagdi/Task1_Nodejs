const fs=require('fs');

//add person function 

const addPerson = (id,fName,lName, age,city) => {

    const persons = loadPersons();
    const duplicatePerson = persons.filter((person) => person.id === id);

    if (duplicatePerson.length === 0) {
        persons.push({
            id:id,
            fName:fName,
            lName:lName,
            age:age,
            city:city
        });
        savePersons(persons);
        console.log('Person added successfully');
    } else {
        console.log('Person already exists');
    }
}

//load persons function
const loadPersons = () => {
    try {
        const dataBuffer = fs.readFileSync('persons.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//save persons function
const savePersons = (persons) => {
    const dataJSON = JSON.stringify(persons);
    fs.writeFileSync('persons.json', dataJSON);
}

//view persons function
const viewPersons = () => {
    const persons = loadPersons();
    persons.forEach((person) => {
        console.log(person.id + ' ' + person.fName + ' ' + person.lName + ' ' + person.age + ' ' + person.city);
    });
}

//view person function
const viewPerson = (id) => {
    const persons = loadPersons();
    const person = persons.find((person) => person.id === id);
    if (person) {
        console.log(person.id + ' ' + person.fName + ' ' + person.lName + ' ' + person.age + ' ' + person.city);
    } else {
        console.log('Person not found');
    }
}

//delete persons
const deletePerson = (id) => {
    const persons = loadPersons();
    const personsToKeep = persons.filter((person) => person.id !== id);
    if (persons.length > personsToKeep.length) {
        console.log('Person removed');
        savePersons(personsToKeep);
    } else {
        console.log('Person not found');
    }
}

//delete all persons
const deleteAllPersons = () => {
    savePersons([]);
    console.log('All persons removed');
}

module.exports = {
    addPerson: addPerson,
    viewPersons: viewPersons,
    viewPerson: viewPerson,
    deletePerson: deletePerson,
    deleteAllPersons: deleteAllPersons
}