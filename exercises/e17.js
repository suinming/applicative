export function minBy(array, cb) {
    let min = array[0] 
    for (const person of array) {
        let val = cb(person)
        let targetProp
        for(const prop in person){
            if(person[prop] === val){
                targetProp = prop
            }
        }
        if(val < min[targetProp]){
            min = person
        }
    }
    return min
}

export function maxBy(array, cb) {
    let max = array[0] 
    for (const person of array) {
        let val = cb(person)
        let targetProp
        for(const prop in person){
            if(person[prop] === val){
                targetProp = prop
            }
        }
        let compareVal = max[targetProp]
        if(typeof val !== typeof person[targetProp]){
            compareVal = person[targetProp].length
        }
        if(val > compareVal){ 
            max = person
        }
    }
    return max 
}
