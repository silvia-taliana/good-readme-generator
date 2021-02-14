// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What technologies were used?',
        name: 'tech'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please describe how the project can be used',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What lisence would you like to use?',
        name: 'lisence',
        choices: ['MIT', 'other', 'another'],
    },
    {
        type: 'input',
        message: 'Please insert contribution guidlines',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Please insert test guidlines',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer.prompt(questions);

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    generateMarkdown();
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
        .then((data) => writeFileAsync(fileName, writeToFile(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();