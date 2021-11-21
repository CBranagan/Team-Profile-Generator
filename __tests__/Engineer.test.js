const Engineer = require('../lib/Engineer')

test('Creates an Engineer Object', () => {

    const engineer = new Engineer('Chad', 1, 'chad@gmail.com', 'chad@github.com')

    expect(engineer.name).toBe('Chad')
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
    expect(engineer.role).toBe('Engineer')
})

test('returns the users github account', () => {

    const engineer = new Engineer('Chad', 1, 'chad@gmail.com', 'chad@github.com')

    expect(engineer.getGitHub()).toEqual(expect.any(String))

})

test('Should return employees roles as engineer', () => {
    const engineer = new Engineer()

    expect(engineer.getRole()).toBe('Engineer')
})
