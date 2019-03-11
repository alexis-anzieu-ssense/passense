import LengthValidator from './validators/LengthValidator'
import TypeValidator from './validators/TypeValidator'

export default function validatePassword(password: any) {
    return TypeValidator.isValid(password) && LengthValidator.isValid(password);
};