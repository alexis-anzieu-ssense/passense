"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LengthValidator_1 = require("./validators/LengthValidator");
const UpperCaseValidator_1 = require("./validators/UpperCaseValidator");
function validatePassword(password) {
    let upperCaseValidator = new UpperCaseValidator_1.default({
        minNumber: 1
    });
    let lengthValidator = new LengthValidator_1.default({
        minLenght: 7
    });
    return upperCaseValidator.validate(password) && lengthValidator.validate(password);
}
exports.validatePassword = validatePassword;
