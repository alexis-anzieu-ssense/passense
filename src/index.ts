import LengthValidator from "./validators/LengthValidator";
import UpperCaseValidator from './validators/UpperCaseValidator';

export function validatePassword(password: any, config?: any) {

    const upperCaseValidator = new UpperCaseValidator(config && config.upperCase ? config.upperCase : undefined);
    const lengthValidator = new LengthValidator(config && config.length ? config.length : undefined);

    return upperCaseValidator.validate(password) && lengthValidator.validate(password);

}