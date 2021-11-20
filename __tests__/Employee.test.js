const Employee = require('../lib/Employee')

test('Creates an employee object', () => {

    const employee = new Employee('Chad')
    employee.id = 1
    employee.email = "chad@email"

    expect(employee.name).toBe('Chad')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    
} )