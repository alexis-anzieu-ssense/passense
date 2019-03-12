import LengthValidator from './validators/LengthValidator'
import UpperCaseValidator from './validators/UpperCaseValidator'

export function validatePassword(password: any) {

    let upperCaseValidator = new UpperCaseValidator({
        minNumber: 1
    });


    let lengthValidator = new LengthValidator({
        minLenght: 7
    });

    return upperCaseValidator.validate(password) && lengthValidator.validate(password);

}