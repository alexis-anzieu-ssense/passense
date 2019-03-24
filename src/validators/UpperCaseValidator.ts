import { Validator } from './Validator';

const defaultConfig = {
    minimum: 1,
    iteration: 0,
}

interface config {
    minimum?: number;
}

export default class UpperCaseValidator extends Validator {

    private minimum: number;
    private iteration: number;

    constructor(config?: config) {
        super();
        const mergedConfig = this.mergeConfig(config, defaultConfig);
        this.minimum = this.ensureTyping(mergedConfig.minimum, 'number');
        this.iteration = this.ensureTyping(mergedConfig.iteration, 'number');
    }

    public isValid(password: string): boolean {
        if (!this.isStringUpperCased(password)) { throw new Error(`You must to include at least ${this.minimum} uppercase letter`); }
        return true;
    }

    private isStringUpperCased(s: string): boolean {
        for (let i = 0; i < s.length; i++) {
            if (this.isCharUpperCase(s[i])) {
                if (++this.iteration === this.minimum) { return true; }
            }
        }
        return false;
    }

    private isCharUpperCase(s: string): boolean {
        // number and unexpected characters are not allowed
        return s === s.toUpperCase() && s != s.toLowerCase();
    }

}
