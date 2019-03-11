"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LengthValidator_1 = require("./validators/LengthValidator");
const TypeValidator_1 = require("./validators/TypeValidator");
function validatePassword(password) {
    return TypeValidator_1.default.isValid(password) && LengthValidator_1.default.isValid(password);
}
exports.default = validatePassword;
;
