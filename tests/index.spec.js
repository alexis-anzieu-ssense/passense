const passense = require('../src/index');

describe('Password typed by user', () => {

    test('correct password length', () => {
        expect(passense('this is a correct password')).toBe(true);
    });

    test('wrong password length', () => {
        expect(() => {
            passense('dd');
        }).toThrowError(new Error("The min lenght is 7 characters"));

    });

    test('wrong type password input', () => {
        expect(() => {
            passense(42);
        }).toThrowError(new Error("Type entered is not correct"));

    });
})
