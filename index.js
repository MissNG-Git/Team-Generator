const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const valCheck = (value) => { if(value){return true} else {return 'Please enter a value.'}};
const teamMembers = [];
const fs = require('fs');
const path = './dist/team.html';

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

                addCardHTML(newMember);
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

                addCardHTML(newMember);
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

                addCardHTML(newMember);
                addMore();
            })
        }
    })
    .catch(function (err) {
        console.log(err);
    })
}

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
            exitAdd();
        }
    })
}

function baseHTML() {
    const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>MissNG Team</title>

    <link rel="stylesheet" href="../assets/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/5e88de36ed.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-content">
                <!-- Team Cards -->
                `;

    fs.writeFile(path, html, function(err) {
        if (err) {
            console.log(err);
        }
    });

    console.log("Building base HTML...");
}

function addCardHTML(member) {
    return new Promise(function() {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        
        if (role === "Manager") {
            const number = member.getNum();
            data = `<div class="column">
                    <div class="card team-card" style="width: 18rem">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-mug-hot"></i> ${role}</h3>
                        </div>

                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">Office Number: ${number}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
        }

        else if (role === "Engineer") {
            const git = member.getGit();
            data = `<div class="column">
                    <div class="card team-card" style="width: 18rem">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-glasses"></i> ${role}</h3>
                        </div>

                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${git}">${git}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
        }

        else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="column">
                    <div class="card team-card" style="width: 18rem">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${role}</h3>
                        </div>

                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
        }

        fs.appendFile(path, data, function(err) {
            if (err) {
                console.log(err);
            }
        });

        console.log("Adding Team Member to HTML...");
        })
}

function exitAdd() {
    const html = `
            </div>
        </div>
    </div>
</body>
</html>`;

    fs.appendFile(path, html, function (err) {
        if (err) {
            console.log(err);
        };
    });

    console.log('HTML Created! Thank you for using the MissNG Team Generator :)')
}

function init() {
    baseHTML();
    addMember();
}

init();