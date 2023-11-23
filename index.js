// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Function From Project files
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What's the name of your project?`,
    },
    {
        type: 'input',
        name: 'username',
        message: `What's your GitHub User? We will use this for a contact section.`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What's your email? We will use this for a contact section.`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Type a short description of your project.`,
    },
    {
        type: 'input',
        name: 'installation',
        message: `What are the steps to install your project?`,
        default: `N/A`,
    },
    {
        type: 'input',
        name: 'usage',
        message: `Type the use of the application, i.e. images, navigation, etc.`,
        default: `N/A`,
    },
    {
        type: 'input',
        name: 'tests',
        message: `What are the steps needed to run your project?`,
        default: `N/A`,
    },
    {
        type: 'input',
        name: 'tests',
        message: `What are the steps needed to run your project?`,
        default: `N/A`,
    },
    {
        type: 'input',
        name: 'contributions',
        message: `What are the steps needed for users to contribute to your project?`,
        default: `[Contributor Covenant](https://www.contributor-covenant.org/)`,
    },
    {
        type: 'list',
        name: 'license',
        message: `What kind of license does your project fall under?`,
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Received answers! Generating README...');
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
