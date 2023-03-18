import { data } from "../data/data";
import { maxBy } from "./e17.js";
// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    // Your code goes here...
    // feel free to import your `maxBy` or `minBy` methods from previous lessons
    let obj = {};
    data.asteroids.map((asteriod) => {
        if (obj.hasOwnProperty(asteriod.discoveryYear)) {
            obj[asteriod.discoveryYear] += 1;
        } else {
            obj[asteriod.discoveryYear] = 1;
        }
    });
    const keysArr = Object.keys(obj);
    const valuesArr = Object.values(obj);
    const maxValueIdx = valuesArr.indexOf(Math.max(...valuesArr));
    return Number(keysArr[maxValueIdx]);
    // const obj = maxBy(array, (asteroid) => asteroid.discoveryYear)
    // return Object.keys(obj)[0]
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
