// required package dependencies
const inquirer = require ('inquirer');
const fs = require ('fs');

// our required external modules
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

async function createHTML() {
    console.log("Let's create your team profile");
    // store the HTML to be output
    let myTeamHTML = '';
    // variable to hold the number of team members. To be used in validating at least one member entry made
    let teamCount;

    await inquirer.prompt (
        {
          type: 'number',
          message: 'Enter your number of team members:',
          name: 'numOfMembers'
        }
    )
    .then((count) => {
        teamCount = count.numOfMembers + 1;
    });

    if (teamCount <= 1) {
        console.log ('A team needs at least one member. Enter yourself as a member.');
        return;
    }
    for (i = 1; i < teamCount; i++) {
        let name;
        let id;
        let title;
        let email;
        
        await inquirer.prompt ([
            {
                type: 'input',
                message: "Enter team member (${i})'s name:",
                name: 'name'
            },
            {
                type: 'input',
                message: "Enter team member (${i})'s ID:",
                name: 'id'
            },
            {
                type: 'input',
                message: "Enter team member (${i})'s email address:",
                name: 'email'
            },
            {
                type: 'list',
                message: "Enter team member (${i})'s title:",
                name: 'title',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then((res) => {
            name = res.name;
            id = res.id;
            title = res.title;
            email = res.email;
        });

        switch (title) {
            case 'Manager':
                await inquirer.prompt ([
                    {
                        type: 'input',
                        message: 'Enter the office number:',
                        name: 'officeNum'
                    }
                ])
                .then ((res) => {
                    const manager = new Manager (name, id, email, res.officeNum);
                    teamMbr = fs.readFileSync('src/manager.html');
                    myTeamHTML = myTeamHTML + '\n' + eval('`' + teamMbr + '`');
                });
                break;
            case 'Engineer':
                await inquirer.prompt ([
                    {
                        type: 'input',
                        message: 'Enter the GitHub username of the engineer:',
                        name: 'gitHub'
                    }
                ])
                .then ((res) => {
                    const engineer = new Engineer (name, id, email, res.gitHub);
                    teamMbr = fs.readFileSync('src/engineer.html');
                    myTeamHTML = myTeamHTML + '\n' + eval('`' + teamMbr + '`');
                });
                break;
            case 'Intern':
                await inquirer.prompt ([
                    {
                        type: 'input',
                        message: 'Enter the school the Intern is attending:',
                        name: 'school'
                    }
                ])
                .then ((res) => {
                    const intern = new Intern (name, id, email, res.school);
                    teamMbr = fs.readFileSync('src/intern.html');
                    myTeamHTML = myTeamHTML + '\n' + eval('`' + teamMbr + '`');
                });
                break;
        }
    }
    const tempHTML = fs.readFileSync('src/temp.html');

    myTeamHTML = eval('`' + tempHTML + '`');

    fs.writeFile ('dist/myteam.html', myTeamHTML, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('HTML page myteam.html was created successfully.');
    });
}
createHTML();