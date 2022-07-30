export default function appendToEachArrayValue(array, appendString) {
    let count = 0
    for (let idx of array) {
        //console.log(idx)
        //console.log(array[count])
        let value = idx;
        array[count] = appendString + value;
        count++
    }
  
    return array;
  }
  