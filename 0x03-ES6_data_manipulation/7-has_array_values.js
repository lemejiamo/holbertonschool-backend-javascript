export default function hasValuesFromArray(set, array) {
  for (const number of array) {
    const check = set.has(number);
    if (check === false) {
      return false;
    }
  }
  return true;
}
