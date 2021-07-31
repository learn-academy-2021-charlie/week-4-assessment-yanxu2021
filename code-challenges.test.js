// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

const { range, isArray } = require("lodash")

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array, removes the first item from the array 
// and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided.
// Review javaScript test with expect statement
// Format: describe("",()=>{test("",()=>{expect(functionName(testData).toEqual(expectResult))})})
// Input: array Output: array
// Solution: 
// how to test a function that output is random?

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("The shuffles function.", () =>{
    test("takes in an array, removes the 1st item and shuffles the remaining.", ()=>{
        expect(shuffles(colors1)).toEqual([ 'blue', 'pink', 'green', 'yellow' ])
        expect(shuffles(colors2)).toEqual([ 'indigo', 'saffron', 'periwinkle', 'ochre', 'aquamarine' ])
    })
})

// b) Create the function that makes the test pass.
// Function: shuffles()
// Input and output: array

// Solution 1: 
// With random output
// .shift() method removes the first element of an array and .shift() method changes the original array
// randomize shuffle-->index-->random pick element, swap 
const randomShuffles = (arr) =>{
    // Step 1: .shift(1) remove the first element and get remaining array 
    arr.shift(1)
    // Step 2: set up currentIndex to the max number, and will get randomIndex(syntax review: Math.floor(Math.random()*max))
    let currentIndex = arr.length
    while (currentIndex >0){
        //Pick a random element
        let randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex --
        //Swap with the currentIndex element
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr
}
console.log(randomShuffles([1, 5, 90098, "lilj"]))
// Output1: [ 'lilj', 5, 90098 ]
// Output2: [ 5, 'lilj', 90098 ]
// Output3: [ 90098, 'lilj', 5 ]

// Solution 2: 
// Without random output, shuffled with some rules. arr[currentIndex] will swap with arr[currentIndex - 1]
const shuffles = (arr) =>{
    // Step 1: .shift(1) remove the first element and get remaining array 
    arr.shift(1)
    // Step 2: set up currentIndex to the max number
    let currentIndex = arr.length - 1
    // Start from 1, do until arr[1] swap with arr[0]
    while (currentIndex > 1){
        // Pick the element next to the currentIndex and swap
        [arr[currentIndex], arr[currentIndex-1]] = [arr[currentIndex-1], arr[currentIndex]]
        currentIndex --
    }
    return arr
}
console.log(shuffles([1, 5, 90098, "lilj"]))
// Output: [ 5, 'lilj', 90098 ]
// console.log(shuffles(colors1))
// Output: [ 'blue', 'pink', 'green', 'yellow' ]
// console.log(shuffles(colors2))
// Output: [ 'indigo', 'saffron', 'periwinkle', 'ochre', 'aquamarine' ]


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum 
// and maximum numbers in that order.
// a) Create a test with expect statements for each of the variables provided.
// Function: arrRange
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [ 5, 109]
describe("The arrRange function.", () =>{
    test("takes in an array of numbers, return minumum and maximum.", ()=>{
        expect(arrRange(nums1)).toEqual([-8, 90])
        expect(arrRange(nums2)).toEqual([5, 109])
        expect(arrRange("yan")).toEqual('Please input an array.')
        expect(arrRange([1,2,4,"yan"])).toEqual('Please make sure you input an array of numbers.')
    })
})

// b) Create the function that makes the test pass.
// Function: arrRange, Input: arr, Output: newArr
// Solution: step1: check if array, 2: check if elements are numbers, 3: find the min and max 4: return newArr = [min, max]
// isArray(arr) and arr.some(isNaN)
// JavaScript isNaN() function is used to check whether a given value is an illegal number or not.
const arrRange = (arr) =>{
    if(!isArray(arr)){
        return 'Please input an array.'
    }else{
        if(arr.some(isNaN)){
            return 'Please make sure you input an array of numbers.'
        }else{
            // Solution 1: .sort() method
            // .sort() method sorts the elements of an array in place and returns the sorted array. 
            // The default sort order is ascending, 
            // arr.sort((a,b) => a-b)
            // let newArr = [arr[0], arr[arr.length -1]]
            // return newArr

            // Solution 2: Assumption
            let min = arr[0], max = arr[0]
            for(let i = 1; i < arr.length; i++){
                let currentValue = arr[i]
                currentValue > max? max = currentValue : null
                currentValue < min? min = currentValue : null
            }
            let newArr = [min, max]
            return newArr

        }
    }
}
console.log(arrRange(nums1))
// Output: [ -8, 90 ]
console.log(arrRange(nums2))
// Output: [ 5, 109 ]
console.log(arrRange("yan"))
// Output: Please input an array.
console.log(arrRange([1,2,4,"yan"]))
// Output: Please make sure you input an array of numbers.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
// STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// a) Create a test with an expect statement using the variables provided.
// Function: noDup
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
describe("The noDop function.", () =>{
    test("takes in two arrays of numbers, return an array with no duplicates.", ()=>{
        expect(noDup(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        expect(noDup("yan", [1, 2, 3])).toEqual('Please input two arrays.')
    })
})

// b) Create the function that makes the test pass.
// Function: noDup
// Input: arr1, arr2
// Output: newArr
// Solution: step 1. merge 2. remove duplicates.
// JavaScript ES6 introduced the spread operator. The syntax is three dots ... followed by the array(or iterable).
// Spread operator expands the array into individual elements.
const noDup = (arr1, arr2) =>{
    if(!isArray(arr1) || !isArray(arr2)){
        return 'Please input two arrays.'
    }else{
        // Merge two arrays without removing duplicates by spread operator
        // let newArr = [...arr1, ...arr2]//Don't remove duplicates
        let newArr = [...new Set([...arr1, ...arr2])]// Remove duplicates
        // Sets in JavaScript is a collection of items which are unique.
        // Set in ES6 are ordered: elements of the set can be iterated in the insertion order.
        return newArr
    }
}
console.log(noDup(testArray1, testArray2))
// Output:      [
//   3, 7, 10, 5,
//   4, 8,  2, 1
// ]
console.log(noDup("yan", [1, 2, 3]))
// Output: Please input two arrays.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.389 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.32s.
// yanxu@Yans-MacBook-Air week-4-assessment-yanxu2021 % 