// see e16.md

export function find(array, callback) {
    return array.find((element) => callback(element))
}
