// need to loop through the array of employees and create a card for each and then attach those cards to the body of
// the markdown

import {empList} from '../index'
function employeeCards (data) {

    

    for(var i=0; i < data.length; i++) {

        if(empList[i].role === 'Manager') {

        return `

        <div class="card">
            <div class="card-header">
                <h4>${empList[0].name}<h4>
                <h5>${data.role}<h5>
            </div>
            <div class="card-body">Emp ID:${data.id}                  
            </div>
            <div class="card-body">Email:${data.email}
            </div>
            <div class="card-body">Office Number:${data.office}
            </div>
        </div>             
        `
        }
         else if(data.role === 'Engineer') {
            
        return `

        <div class="card">
            <div class="card-header">
                <h4>${data.name}<h4>
                <h5>${data.role}<h5>
            </div>
            <div class="card-body">Emp ID:${data.id}                  
            </div>
            <div class="card-body">Email:${data.email}
            </div>
            <a href='${data.github}.github.com' class="card-body">GitHub${data.github}</a>
        </div>             
        `
        } else {

        return `

        <div class="card">
            <div class="card-header">
                <h4>${[i].name}<h4>
                <h5>${data.role}<h5>
            </div>
            <div class="card-body">Emp ID:${data.id}                  
            </div>
            <div class="card-body">Email:${data.email}
            </div>
            <div class="card-body">School:${data.school}
        </div>             
        `

        }


    }
}


function generateMarkdown (data) {

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

    
    ${employeeCards(data)}
    </body>
    </html>
    
    `
}



module.exports = generateMarkdown