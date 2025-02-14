

const data= require('./data.js');

const yargs = require('yargs');

//add command

yargs.command({
    command: 'add',
    describe: 'Add a new person',
    builder: {
        id: {
            describe: 'Person ID',
            demandOption: true,
            type: 'number'
        },
        fName: {
            describe: 'First Name',
            demandOption: true,
            type: 'string'
        },
        lName: {
            describe: 'Last Name',
            demandOption: true,
            type: 'string'
        },
        age: {
            describe: 'Age',
            demandOption: true,
            type: 'number'
        },
        city: {
            describe: 'City',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        data.addPerson(argv.id, argv.fName, argv.lName, argv.age, argv.city);
    }
});


//view command
yargs.command({
    command: 'view',
    describe: 'View all persons',
    handler: function () {
        data.viewPersons();
    }
});

//view command for a specific person
yargs.command({
    command: 'viewPerson',
    describe: 'View a person',
    builder: {
        id: {
            describe: 'Person ID',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        data.viewPerson(argv.id);
    }
});

//delete command
yargs.command({
    command: 'delete',
    describe: 'Delete a person',
    builder: {
        id: {
            describe: 'Person ID',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        data.deletePerson(argv.id);
    }
});

//delete all command
yargs.command({
    command: 'deleteAll',
    describe: 'Delete all persons',
    handler: function () {
        data.deleteAllPersons();
    }
});

yargs.parse();