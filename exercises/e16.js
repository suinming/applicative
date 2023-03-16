// see e16.md

export function find(array, callback) {
  let returnArray = [];

  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    if (callback(element)) {
      returnArray.push(element);
    } 
  }
    return returnArray.length ? returnArray[0] : undefined

}
