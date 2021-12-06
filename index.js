const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
// const generateMarkDown = require('./src/generateMarkdown')

var empList = []

// export const empList = []

const init = () => {

    function makeManager() {
        inquirer.prompt(
        [

            {
                type: 'input',
                name: 'name',
                message: 'What is the  Team Managers Name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Managers ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Managers Email address?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the Managers office number?'
            }
            
        ]).then(data => {
        

            const manager = new Manager(data.name, data.id, data.email, data.office)
            
            empList.push(manager)

            generateTeam();
    })}

    function generateTeam() {

        inquirer.prompt([
            {
                type: 'list',
                name: 'more',
                message: 'Would you like to add an Engineer, Intern, or Exit?',
                choices: ['Engineer', 'Intern', 'Make Profile']
            }
        ]).then(data => {
            switch (data.more) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Make Profile":
                  makePage(empList)
            }
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the employees Name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers Email address?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineers GitHub link?'
            }            
        ]).then(data => {
        
            const engineer = new Engineer(data.name, data.id, data.email, data.github)

            empList.push(engineer)

            generateTeam();
    })}

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the employees Name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Interns ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns Email address?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the Intern go to?'
            }
        ]).then(data => {
        
            const intern = new Intern(data.name, data.id, data.email, data.school)

            empList.push(intern)

            generateTeam();
    })}

    const makePage = (empList) => {

        function employeeCards(empList) {

    

            for(var i=0; i < [empList][i].length; i++) {
        
                if(empList[i].role === 'Manager') {
        
                return `
        
                <div class="card">
                    <div class="card-header">
                        <h4>${empList[i].name}<h4>
                        <h5>${empList[i].role}<h5>
                    </div>
                    <div class="card-body">Emp ID:${empList[i].id}                  
                    </div>
                    <div class="card-body">Email:${empList[i].email}
                    </div>
                    <div class="card-body">Office Number:${empList[i].office}
                    </div>
                </div>             
                `
                }
                 else if(empList[i].role === 'Engineer') {
                    
                return `
        
                <div class="card">
                    <div class="card-header">
                        <h4>${empList[i].name}<h4>
                        <h5>${empList[i].role}<h5>
                    </div>
                    <div class="card-body">Emp ID:${empList[i].id}                  
                    </div>
                    <div class="card-body">Email:${empList[i].email}
                    </div>
                    <a href='${empList[i].github}.github.com' class="card-body">GitHub${empList[i].github}</a>
                </div>             
                `
                } else {
        
                return `
        
                <div class="card">
                    <div class="card-header">
                        <h4>${empList[i].name}<h4>
                        <h5>${empList[i].role}<h5>
                    </div>
                    <div class="card-body">Emp ID:${empList[i].id}                  
                    </div>
                    <div class="card-body">Email:${empList[i].email}
                    </div>
                    <div class="card-body">School:${empList[i].school}
                </div>             
                `
        
                }
        
        
            }
        }
        
        
        const generateMarkDown = function(empList) {


            return `
            
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            </head>
            <body>
        
            ${employeeCards(empList)}
            
            </body>
            </html>
            
            `
        }
        

        fs.writeFile('./dist/index.html', generateMarkDown(empList), (err) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(empList)
        })
        
    }

    makeManager();

}



init();

