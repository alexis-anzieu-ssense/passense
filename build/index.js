"use strict";
module.exports = function passense(password) {
    if (typeof password != 'string')
        throw new Error("Type entered is not correct");
    if (password.length < 7)
        throw new Error("The min lenght is 7 characters");
    return true;
};
