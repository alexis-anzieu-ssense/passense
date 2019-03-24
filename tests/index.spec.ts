import { validatePassword } from '../src/index';

describe('Password typed by user with default config', () => {

    test('should be ok when type a correct password', () => {
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
        }).toThrowError(new Error("You must to include at least 1 uppercase letter"));

    });
})


describe('Password typed by user with full custom config', () => {

    const customConfig = {
        upperCase: {
            minimum: 2
        },
        length: {
            minimum: 8
        }
    }
    test('should be ok when type a correct password', () => {
        expect(validatePassword('thiS is a correct passworD', customConfig)).toBe(true);
    });

    test('should throw a password length error when lenght < 7', () => {
        expect(() => {
            validatePassword('OdD', customConfig);
        }).toThrowError(new Error("The min lenght is 8 characters"));

    });

    test('show throw a type error input when type a number', () => {
        expect(() => {
            validatePassword(42, customConfig);
        }).toThrowError(new Error("Type entered is not correct"));

    });

    test('should throw a uppercase requirement error when there is none', () => {
        expect(() => {
            validatePassword("wrong passw-4'ord", customConfig);
        }).toThrowError(new Error("You must to include at least 2 uppercase letter"));

    });
})

describe('Password typed by user with upperCaseConfig only', () => {

    const customConfig = {
        upperCase: {
            minimum: 2
        },
    }
    test('should be ok when type a correct password', () => {
        expect(validatePassword('thiS is a correct passworD', customConfig)).toBe(true);
    });

    test('should throw a password length error when lenght < 7', () => {
        expect(() => {
            validatePassword('OdD', customConfig);
        }).toThrowError(new Error("The min lenght is 7 characters"));

    });

    test('show throw a type error input when type a number', () => {
        expect(() => {
            validatePassword(42, customConfig);
        }).toThrowError(new Error("Type entered is not correct"));

    });

    test('should throw a uppercase requirement error when there is less than 2', () => {
        expect(() => {
            validatePassword("wrong passw-4'ord", customConfig);
        }).toThrowError(new Error("You must to include at least 2 uppercase letter"));

    });
})

describe('Password typed by user with lenghtConfig only', () => {

    const customConfig = {
        length: {
            minimum: 8
        },
    }
    test('should be ok when type a correct password', () => {
        expect(validatePassword('thiS is a correct passworD', customConfig)).toBe(true);
    });

    test('should throw a password length error when lenght < 8', () => {
        expect(() => {
            validatePassword('OdD', customConfig);
        }).toThrowError(new Error("The min lenght is 8 characters"));

    });

    test('show throw a type error input when type a number', () => {
        expect(() => {
            validatePassword(42, customConfig);
        }).toThrowError(new Error("Type entered is not correct"));

    });

    test('should throw a uppercase requirement error when there is none', () => {
        expect(() => {
            validatePassword("wrong passw-4'ord", customConfig);
        }).toThrowError(new Error("You must to include at least 1 uppercase letter"));

    });
})