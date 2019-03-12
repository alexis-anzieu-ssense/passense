import { Validator } from "./Validator";

interface config {
    minNumber: number;
}

export default class UpperCaseValidator extends Validator {

    private minNumber: number;
    private iteration: number;

    constructor(config: config) {
        super();
        this.minNumber = config.minNumber;
        this.iteration = 0;
    }

    public isValid(password: string): boolean {
        if (!this.isStringUpperCased(password)) throw new Error("You must to include one uppercase letter");
        return true
    }

    private isStringUpperCased(s: string): boolean {
        for (let i = 0; i < s.length; i++) {
            if (this.isCharUpperCase(s[i])) {
                if (++this.iteration === this.minNumber) return true
            }
        }
        return false;
    }

    private isCharUpperCase(s: string): boolean {
        // number and unexpected characters are not allowed
        return s === s.toUpperCase() && s != s.toLowerCase();
    }
}