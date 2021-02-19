const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Should create Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('Should set name w/constructor argument', () => {
        const name = 'Luke';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Should set id w/constructor argument', () => {
        const testValue = 50;
        const e = new Employee('Boo', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Should set email w/constructor argument', () => {
        const testValue = 'jedi@master.com';
        const e = new Employee('Boo', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
        it('Should get name w/getName()', () => {
            const testValue = 'Luke';
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe('getId', () => {
        it('Should get id w/getId()', () => {
            const testValue = 100;
            const e = new Employee('Boo', testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe('getEmail', () => {
        it('Should get email w/getEmail()', () => {
            const testValue = 'jedi@master.com';
            const e = new Employee('Boo', 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe('getRole', () => {
        it('Should return \'Employee\'', () => {
            const testValue = 'Employee';
            const e = new Employee('Luke', 1, 'jedi@master.com');
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});