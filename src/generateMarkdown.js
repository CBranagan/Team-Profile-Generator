// need to loop through the array of employees and create a card for each and then attach those cards to the body of
// the markdown

function employeeCards(empList) {  
    

    
    for(var i = 0; i < empList.length; i++)

        if(empList[i].role === 'Manager') {

      return `

        <div class="card" style= "width: 18rem;">
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
          if(empList[i].role === 'Engineer') {
            
        return `

        <div class="card" style= "width: 18rem;">
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

        <div class="card" style= "width: 18rem;">
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

    
    



generateMarkdown = function(empList) {


    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile</title>
    </head>
    <body>

    ${employeeCards(empList)}
    
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `
}






module.exports = generateMarkdown