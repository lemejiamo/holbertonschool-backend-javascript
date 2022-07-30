export default function appendToEachArrayValue(array, appendString) {
    let count = 0
    for (const idx of array) {
        //console.log(idx)
        //console.log(array[count])
        const value = idx;
        array[count] = appendString + value;
        count++
    }
  
    return array;
  }
