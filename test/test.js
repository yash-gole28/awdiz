// js fn() that takes any array of strings as input and returns a new array containing the lengths of those strings

let string = ["yash", "tejas", "shreyas", "sameer"]


function stringArray(array) {
    let lengthArr = []
    for (var i = 0; i < array.length; i++) {
        let length = array[i].length
        lengthArr.push(length)
        // console.log(array[i])
        console.log(lengthArr)

    }

}

stringArray(string)

let stringArray2 = ["rohit", "shivam", "harsh", "rahul", "sumit"]

function stringLengthtwo(array) {
    let stringtwo = []
    for (var i = 0; i < array.length; i++) {
        let length = array[i].length
        stringtwo.push(length)
    }
    return stringtwo
}

// console.log(stringLengthtwo(stringArray2))




let stringArray3 = ["jiya", "sneha", "sakshi", "anjali", "geeta"]

function stringLengththree(array) {
    let emptyArr = []
    for (var j = 0; j < array.length; j++) {
        let strLength = array[j].length
        emptyArr.push(strLength)
    }
    return emptyArr

}


// console.log(stringLengththree(stringArray3))

let stringArray4 = ["sdasdf", "aogheagha", "ewriueriobhjgaoig", "owevsdd"]

function findLength(array) {
    let lengthFind = []
    for (var k = 0; k < array.length; k++) {
        let lengthofStr = array[k].length
        lengthFind.push(lengthofStr)
    }
    return lengthFind

}

// console.log(findLength(stringArray4))












// js fn that takes an array of numbers as input and returns a new array with only the even numbers from the original array

let numberArr = [54, 65, 68, 8, 15, 86, 35, 40, 51]
// let min = Math.min(...numberArr)
// console.log(min)
// console.log (numberArr)

// console.log(numberArr)
function number(numbArr) {
    let nArray = []
    for (var i = 0; i < numbArr.length; i++) {
        if (numbArr[i] % 2 == 0) {

            nArray.push(numbArr[i])
            console.log(nArray)
        }

    }
}

number(numberArr)



function evenFind(array) {
    let evenArr = []

    for (var i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {
            evenArr.push(array[i])
        }
    }
    return evenArr

}
// console.log(evenFind(numberArr))




function evenNumber(array) {
    let evenNo = []

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNo.push(array[i])
        }
    }
    return evenNo
}

// console.log(evenNumber(numberArr))


function evenFinder(noList) {
    var evenArray = []

    for (var i = 0; i < noList.length; i++) {
        if (noList[i] % 2 == 0) {
            evenArray.push(noList[i])

        }
    }
    return evenArray
}

// console.log(evenFinder(numberArr))












// js fn that takes an array as input and return the smallest value from the array

let numArray = [10, 23, 54, 75, 12, 89, 7, 3, 89, 54, 2, 6]

function smallestNo(array) {
    // console.log(array)
    let minvalue = array[0]
    for (var i = 1; i < array.length; i++) {
        if (minvalue > array[i]) {
            minvalue = array[i]
        }

    }
    // console.log(minvalue)
    return minvalue

}

console.log("smallest value in an array -",smallestNo(numArray))



let noArray = [123, 567, 90, 86, 34, 78, 90, 35, 47, 24, 56]

function findSmall(array) {
    let smallNum = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallNum) {
            smallNum = array[i]
        }
    }
    return smallNum
}


// console.log(findSmall(noArray))


function smallestNum(array) {

    let sNo = array[0]
    for (var i = 1; i < array.length; i++) {
        if (sNo > array[i]) {
            sNo = array[i]
        }
    }

    return sNo
}
// console.log(smallestNum(noArray))



function lowestNo(array) {
    let lowest = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i]
        }
    }
    return lowest
}

// console.log(lowestNo(noArray))
























// Question 4

let arr1 = [1, 5, 67, 35, 97, 2, 4, 6, 23]
let arr2 = [2, 5, 47, 86, 4, 6, 57, 23]

function concat(first, second) {
    let array = []


    for (var i = 0; i < first.length; i++) {


        for (var j = 0; j < second.length; j++) {
            // console.log(second[j])
            if (first[i] == second[j])
                array.push(first[i])

        }

    }
    console.log("new array -", array)

}

// concat(arr1, arr2)

function commonNo(array1, array2) {

    let newArray = []
    for (var i = 0; i < array2.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            if (array2[i] === array1[j]) {
                newArray.push(array2[i])
            }
        }
    }
    return newArray
}

console.log(commonNo(arr1, arr2))


function sameNo(arr1, arr2){

    let copyArray = []
    for(var i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                copyArray.push(arr1[i])
            }
        }
    }
    return copyArray

}

console.log(sameNo(arr1 , arr2))

function commonNo(num1, num2){
    let copy = []
    for(var k=0;k<num1.length;k++){

        for(var l=0;l<num2.length;l++){
            if(num1[k]===num2[l]){
                copy.push(num1[k])
            }
        }
    }
    return copy
}

console.log(commonNo(arr1,arr2))