export function minBy(array, cb) {
    if (array.length === 0) return undefined;
    let minElement = array[0];

    for (let item of array) {
        if (cb(item) < cb(minElement)) {
            minElement = item;
        }
    }
    return minElement;
}

export function maxBy(array, cb) {
    if (array.length === 0) return undefined;
    let maxElement = array[0];

    for (let item of array) {
        if (cb(item) > cb(maxElement)) {
            maxElement = item;
        }
    }
    return maxElement;
}
