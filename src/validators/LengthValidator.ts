export default class LengthValidator {
    static isValid(password: string): boolean {
        if (password.length < 7) throw new Error("The min lenght is 7 characters");
        return true
    }
}