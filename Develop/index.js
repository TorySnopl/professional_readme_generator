// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const generateMD = require('../Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
inq
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'authName',
        },
        {
            type: 'input',
            message: 'Why did you create this project?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learn',
        },
        {
            type: 'input',
            message: 'Would you like to credit anyone?',
            name: 'credit'

        },
        {
            type: 'list',
            message: 'What license did you choose?',
            choices: ['none','afl-3.0','apache-2.0','artistic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','bsd-4-clause','0bsd','cc','cc0-1.0','cc-by-4.0','cc-by-sa-4.0','wrfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can others contribute',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What tests have you run and with what results?',
            name: 'test',

        }

    ])
    .then ((response)=>{
        let title = response.title;
        let authName = response.authName;
        let motivation = response.motivation;
        let install = response.install;
        let learn = response.learn;
        let credit = response.credit;
        let license = response.license;
        let contribute = response.contribute;
        let test = response.test; 
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
