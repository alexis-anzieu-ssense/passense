import { Validator } from './Validator';

const defaultConfig = {
    minimum: 7
}

interface config {
    minimum?: number;
}

export default class LengthValidator extends Validator {
    private minimum: number;

    constructor(config?: config) {
        super();
        const mergedConfig = this.mergeConfig(config, defaultConfig);
        this.minimum = this.ensureTyping(mergedConfig.minimum, 'number');

    }

    public isValid(password: string): boolean {
        if (password.length < this.minimum) { throw new Error(`The min lenght is ${this.minimum} characters`); }
        return true;
    }
}
