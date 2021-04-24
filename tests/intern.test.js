const Intern = require ('../lib/Intern');

test('Intern school can be set successfully', () => {
    const testVal = 'GA Tech';
    const i = new Intern('Jane', 1, 'name@example.com', testVal);
    expect (i.school).toBe(testVal);
});
test("Employee role returned should be 'Intern'", () => {
    const testVal = 'Intern';
    const g = new Intern('Jane', 1, 'name@example.com', 'GA Tech');
    expect (g.getRole()).toBe(testVal);
});
test('Intern school can be retrieved successfully', () => {
    const testVal = 'GA Tech';
    const g = new Intern('Jane', 1, 'name@example.com', testVal);
    expect (g.getschool()).toBe(testVal);
});