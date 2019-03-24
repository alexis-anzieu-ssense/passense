"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LengthValidator_1 = require("./validators/LengthValidator");
const UpperCaseValidator_1 = require("./validators/UpperCaseValidator");
function validatePassword(password, config) {
    const upperCaseValidator = new UpperCaseValidator_1.default(config && config.upperCase ? config.upperCase : undefined);
    const lengthValidator = new LengthValidator_1.default(config && config.length ? config.length : undefined);
    return upperCaseValidator.validate(password) && lengthValidator.validate(password);
}
exports.validatePassword = validatePassword;
