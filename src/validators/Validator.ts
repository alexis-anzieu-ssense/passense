import TypeValidator from './TypeValidator';

export abstract class Validator {

    public validate(password: string): boolean {
        return TypeValidator.isValid(password) && this.isValid(password);
    }

    protected configTypeValidation(variable: any, type: string) {
        const typeOfVariable = typeof variable;
        if (typeOfVariable !== 'undefined' && typeOfVariable !== type) {
            throw new Error(`Invalid type for ${variable} : ${typeOfVariable}. Expected ${type}`);
        }
        return true
    }

    public abstract isValid(password: string): boolean;

}
