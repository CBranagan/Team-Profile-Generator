const Manager = require("../lib/Manager");

test('Creates a Manager Object that inherits all of employees info', () => {
    const manager = new Manager('Chad', 1, 'chad@gmail.com', 1)
    

    expect(manager.name).toBe('Chad')
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.office).toEqual(expect.any(Number))
    expect(manager.role).toBe('Manager')

})
