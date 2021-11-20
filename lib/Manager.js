const Employee = require('../lib/Employee.js')

class Manager extends Employee {
    
    
    constructor(name = "", id, email, office) {
        
        super(name, id, email);

        this.name = name;

        this.id = id;
        this.email = email;
        this.role = "Manager"
        this.office = office

    }
}




module.exports = Manager