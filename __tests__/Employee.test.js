const Employee = require('../lib/Employee')

test('Creates an employee object', () => {

    const employee = new Employee('Chad')
    employee.id = 1
    employee.email = "chad@email"

    expect(employee.name).toBe('Chad')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    
} )

test('Checks the employee object and returns the name value', () => {

    const employee = new Employee('Chad')

    expect(employee.getName()).toBe('Chad')
})

test('Returns the employees id', () => {

    const employee = new Employee('Chad', 1)
    

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()))
})