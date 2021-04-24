const Engineer = require ('../lib/Engineer');

test('GitHub account can be set successfully', () => {
    const testVal = 'gitHub';
    const g = new Engineer('Bill', 1, 'name@example.com', testVal);
    expect (g.gitHub).toBe(testVal);
});
test("Employee role returned should be 'Engineer'", () => {
    const testVal = 'Engineer';
    const g = new Engineer('Bill', 1, 'name@example.com', 'gitHub');
    expect (g.getRole()).toBe(testVal);
});
test('GitHub account can be retrieved successfully', () => {
    const testVal = 'gitHub';
    const g = new Engineer('Bill', 1, 'name@example.com', testVal);
    expect (g.getGitHub()).toBe(testVal);
});