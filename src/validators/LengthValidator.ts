import { Validator } from './Validator';

export const defaultConfig = {
    minimum: 7
}

interface config {
    minimum?: number;
}

export default class LengthValidator extends Validator {
    private minimum: number;

    constructor(config?: config) {
        super();
        this.minimum = config && this.configTypeValidation(config.minimum, 'number') ? config.minimum : defaultConfig.minimum;
    }

    public isValid(password: string): boolean {
        if (password.length < this.minimum) { throw new Error(`The min lenght is ${this.minimum} characters`); }
        return true;
    }
}
