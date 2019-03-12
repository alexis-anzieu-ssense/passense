import { Validator } from "./Validator";

interface config {
    minLenght: number;
}

export default class LengthValidator extends Validator {
    private minLenght: number;


    constructor(config: config) {
        super();
        this.minLenght = config.minLenght;
    }

    public isValid(password: string): boolean {
        if (password.length < this.minLenght) throw new Error("The min lenght is 7 characters");
        return true
    }
}