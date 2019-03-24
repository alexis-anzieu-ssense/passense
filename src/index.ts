import LengthValidator from "./validators/LengthValidator";
import UpperCaseValidator from './validators/UpperCaseValidator';

interface config {
    upperCase?: { minimum: number };
    length?: { minimum: number };
}

export function validatePassword(password: any, config?: config) {

    const upperCaseValidator = new UpperCaseValidator(config && config.upperCase ? config.upperCase : undefined);
    const lengthValidator = new LengthValidator(config && config.length ? config.length : undefined);

    return upperCaseValidator.validate(password) && lengthValidator.validate(password);

}