const Employee = require('./Employee')

class Engineer extends Employee {
    
    
    constructor(name = "", id, email, gitHub) {
        
        super(name, id, email);

        this.name = name;

        this.id = id;
        this.email = email;
        this.role = "Engineer"
        this.github = gitHub
    }
    
    getGitHub() {
    
        return `${this.github}`
    }
}


module.exports = Engineer;