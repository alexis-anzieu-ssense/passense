export default class TypeValidator {
    public static isValid(password: string): boolean {
        if (typeof password != 'string') throw new Error("Type entered is not correct");
        return true
    }
}