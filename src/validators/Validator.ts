import TypeValidator from './TypeValidator';

export abstract class Validator {

    public validate(password: string): boolean {
        return TypeValidator.isValid(password) && this.isValid(password);
    }

    protected mergeConfig(config: any, defaultConfig: any) {
        for (let attr in config) {
            if (!defaultConfig.hasOwnProperty(attr)) {
                throw new Error(`Invalid attribute '${attr}' not available on this config`);
            }
        }
        return { ...defaultConfig, ...config, }
    }

    protected ensureTyping(variable: any, type: string) {
        const typeOfVariable = typeof variable;
        if (typeOfVariable !== type) {
            throw new Error(`Invalid type for ${variable} : ${typeOfVariable}. Expected ${type}`);
        }
        return variable
    }

    public abstract isValid(password: string): boolean;

}
