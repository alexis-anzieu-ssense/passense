module.exports = function passense(password: string) {
    if (password.length<7) throw new Error("The min lenght is 7 characters");
    return true;
};