module.exports = function passense(password) {
    if (password.lenght < 7)
        throw new Error("The min lenght is 7 characters");
    return true;
};
