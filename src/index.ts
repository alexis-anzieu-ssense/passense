module.exports = function passense(password: any) {
    if (password<7) throw new Error("The min lenght is 7 characters");
    return true;
};