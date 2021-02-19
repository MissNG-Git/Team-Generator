const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const valCheck = (value) => { if(value){return true} else {return 'Please enter a value.'}};
const teamMembers = []
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

    <!-- add CSS? -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/5e88de36ed.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-header">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-content col-12 d-flex justify-content-center">
                <!-- Team Cards -->
`;
    fs.writeFile(path, html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Building base HTML...");
}

function cardHTML() {

}

function exitAdd() {
    const html = `            </div>
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