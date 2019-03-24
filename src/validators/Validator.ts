import TypeValidator from './TypeValidator';

export abstract class Validator {

    public validate(password: string): boolean {
        return TypeValidator.isValid(password) && this.isValid(password);
    }

    public abstract isValid(password: string): boolean;

}
