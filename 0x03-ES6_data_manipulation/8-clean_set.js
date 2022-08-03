export default function cleanSet(set, startString) {
  let result = '';
  if (typeof (startString) !== 'string'
  || startString.length === 0
  || typeof (set) !== 'object'
  || typeof (startString) === 'undefined') {
    return result;
  }
  for (const element of set) {
    if (typeof (element) !== 'undefined') {
      if (element.startsWith(startString)) {
        result += (`-${element.slice(startString.length)}`);
      }
    }
  }
  return result.slice(1);
}
