import { isString } from '../helpers/'

export default (value, regex) => {
    if (!isString(value)) {
        throw Error('Value is not string')
    }
    
    if (!(regex instanceof RegExp || regex instanceof Array)) {
        throw Error('You should pass instance of RegExp or Array<RegExp>')
    }

    const regexArray = regex instanceof RegExp ? [regex] : regex;
    const result = regexArray.find(reg => {
        return !reg.test(value)
    })

    const isValid = result === undefined
    return [isValid]
}