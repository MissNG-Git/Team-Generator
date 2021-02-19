const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const valCheck = (value) => { if(value){return true} else {return 'Please enter a value.'}};
const teamMembers = []

function addMore() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add another team member?',
            name: 'addMore',
            choices: [
                'Yes', 
                'No'
            ],
        }
    ])
    .then(function({addMore}) {
        if (addMore === 'Yes') {
            addMember();
        }
        else if (addMore === 'No') {
            // create end fxn
            exitAdd();
        }
    })
}

function addMember() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            default: 'Jim Bob',
            validate: valCheck 
        },

        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: [
                'Manager', 
                'Engineer', 
                'Intern', 
            ],
            validate: valCheck
        },

        {
            type: 'input',
            message: 'Please enter your ID#.',
            name: 'id',
            validate: valCheck
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            default: 'jimbob@fakemail.com',
            validate: valCheck
        }
    ])
    .then(function({name, role, id, email}) {
        if (role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'number',
                    default: '369',
                    validate: valCheck
                }              
            ])
            .then(function({number}) {
                let newMember = new Manager(name, id, email, number);
                teamMembers.push(newMember);
                console.log(teamMembers);
                // add to HTML also

                addMore();
            })
        }
        else if (role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is your GitHub username? (w/o @)',
                    name: 'git',
                    default: 'jb-Git',
                    validate: valCheck
                }              
            ])
            .then(function({git}) {
                let newMember = new Engineer(name, id, email, git);
                teamMembers.push(newMember);
                console.log(teamMembers);
                // add to HTML also

                addMore();
            })
        }
        else if (role === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Which school did you attend?',
                    name: 'school',
                    default: 'noobVersity',
                    validate: valCheck
                },           
            ])
            .then(function({school}) {
                let newMember = new Intern(name, id, email, school);
                teamMembers.push(newMember);
                console.log(teamMembers);
                // add to HTML also

                addMore();
            })
        }
    })
    .catch(function (err) {
        console.log(err);
    })
}

function exitAdd() {
    console.log('Thank you for using the Team Generator!')
}

addMember();

// function writeToFile(path, data) {
//     fs.writeFile(path, data, err => {
//         if(err){
//             console.log(err)
//         }
//         else{console.log('Your README has generated successfully!')}
//     })
// }

// async function init() {
//     await inquirer
//     .prompt(questions)
//     .then(response => {
//         writeToFile(path, generateMarkdown(response));
//         console.log('Thank you for using the MissNG README generator! :)');
//     });    
// }

// init();