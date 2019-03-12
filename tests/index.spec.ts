import { validatePassword } from '../src/index';

describe('Password typed by user', () => {

    test('should be ok when type a correct passworD', () => {
        expect(validatePassword('thiS is a correct passworD')).toBe(true);
    });

    test('should throw a password length error when lenght < 7', () => {
        expect(() => {
            validatePassword('ddD');
        }).toThrowError(new Error("The min lenght is 7 characters"));

    });

    test('show throw a type error input when type a number', () => {
        expect(() => {
            validatePassword(42);
        }).toThrowError(new Error("Type entered is not correct"));

    });

    test('should throw a uppercase requirement error when there is none', () => {
        expect(() => {
            validatePassword("wrong passw-4'ord");
        }).toThrowError(new Error("You must to include one uppercase letter"));

    });
})
