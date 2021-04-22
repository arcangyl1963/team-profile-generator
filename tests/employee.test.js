const Employee = require('../lib/Employee');

test('New Employee object can be created', () => {
    const emp = new Employee ();
    expect (typeof(emp)).toBe('object');
});
test('Name can be set successfully', () => {
    const name = 'John';
    const n = new Employee(name);
    expect (n.name).toBe(name);
});
test('ID can be set successfully', () => {
    const tVal = 10;
    const i = new Employee('Bob', tVal);
    expect (i.id).toBe(tVal);
});
test('Email can be set successfully', () => {
    const tVal = 'name@example.com';
    const em = new Employee('Bob', 1, tVal);
    expect (em.email).toBe(tVal);
});
test('Name can be retrieved successfully', () => {
    const tVal = 'John';
    const n = new Employee(tVal);
    expect (n.getName()).toBe(tVal);
});
test('ID can be retrieved successfully', () => {
    const tVal = 10;
    const i = new Employee('Bob', tVal);
    expect (i.getId()).toBe(tVal);
});
test('Email can be retrieved successfully', () => {
    const tVal = 'name@example.com';
    const em = new Employee('Bob', 1, tVal);
    expect (em.getEmail()).toBe(tVal);
});
test('Employee role can be retrieved successfully', () => {
    const tVal = 'Employee';
    const r = new Employee('Bob', 1, 'name@example.com');
    expect (r.getRole()).toBe(tVal);
});
