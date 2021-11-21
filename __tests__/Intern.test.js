const Intern = require('../lib/intern')

test('Creates an intern Object', () => {

    const intern = new Intern('Chad', 1, 'chad@gmail.com', 'trilogy')

    expect(intern.name).toBe('Chad')
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.role).toBe('Intern')
})

test('returns the users getSchool account', () => {

    const intern = new Intern('Chad', 1, 'chad@gmail.com', 'trilogy')

    expect(intern.getSchool()).toEqual(expect.any(String))

})

test('Should return employees roles as intern', () => {
    const intern = new Intern()

    expect(intern.getRole()).toBe('Intern')
})
