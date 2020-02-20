export default (any) => {
    return typeof(any) === 'string' || any instanceof String;
}