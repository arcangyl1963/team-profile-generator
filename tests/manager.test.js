const Manager = require ('../lib/Manager');
const Employee = require ('../lib/Employee');

test('Office number can be set successfully', () => {
    const testVal = 100;
    const m = new Manager('Bob', 1, 'name@example.com', testVal);
    expect (m.officeNum).toBe(testVal);
});
test("Employee role returned should be 'Manager'", () => {
    const testVal = 'Manager';
    const m = new Manager('Bob', 1, 'name@example.com', 100);
    expect (m.getRole()).toBe(testVal);
});
test('Can retrieve office number successfully', () => {
    const testVal = 100;
    const m = new Manager('Bob', 1, 'name@example.com', testVal);
    expect (m.getofficeNum()).toBe(testVal);
});