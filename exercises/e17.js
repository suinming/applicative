export function minBy(array, cb) {
  if (array.length === 0) return undefined;
  let minValue = cb(array[0]);
  let minElement = array[0];
  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i]);
    if (value < minValue) {
      minValue = value;
      minElement = array[i];
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  if (array.length === 0) return undefined;
  let maxValue = cb(array[0]);
  let maxElement = array[0];
  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i]);
    if (value > maxValue) {
      maxValue = value;
      maxElement = array[i];
    }
  }
  return maxElement;
}
