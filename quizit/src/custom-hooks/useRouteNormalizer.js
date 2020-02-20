import { isString } from '../helpers/'

const regexNumberLettersSpacesAllowed = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
export default (value) => {
    if (!isString(value) || !regexNumberLettersSpacesAllowed.test(value)) {
        return '';
    }

    const result = value.toLowerCase().split(' ').join('-')
    return result
}