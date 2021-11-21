const Employee = require('../lib/Employee')

test('Creates an employee object', () => {

    const employee = new Employee('Chad', 1, 'chad@gmail.com')
    

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

test('Should return the employees email', () => {
    const employee = new Employee('', '', "Chad@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('Should return employees roles as employee', () => {
    const employee = new Employee()

    expect(employee.getRole()).toBe('Employee')
})