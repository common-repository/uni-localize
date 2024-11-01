const isDefined = (value) => typeof value !== 'undefined'; // && value !== null;
const isArray = (value) => Array.isArray(value);
const isObject = (value) => typeof value === 'object' && value !== null && !isArray(value);
const isString = (value) => typeof value === 'string';
function isEmptyString(value) {
  return isDefined(value) && (isString(value) && value === '');
}
function isEmpty(value) {
  return isDefined(value) && ((isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '')
    || value === null);
}
// export function isBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && isBind(value, start, end);
// }
// export function isNotBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && !isBind(value, start, end);
// }
// export function isCleanNotBinding(value, start = '{{', end = '}}'): boolean {
//   return !isDefined(value) || !isBind(value, start, end);
// }
// export function isCleanNotBindings(values, start = '{{', end = '}}'): boolean {
//   return values.every((value) => isCleanNotBinding(value, start, end));
// }

export { isDefined as a, isEmpty as b, isEmptyString as i };
