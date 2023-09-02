// Sum of Array Elements:
// Write a JavaScript function to calculate the sum of all elements in an array.

let array = [19, 34, 76, 24, 97, 24, 97, 56]
// console.log(array)

function sumArray(num) {
    let sum = 0

    for (var i = 0; i < num.length; i++) {
           sum = sum + num[i]
        // console.log(num[i])
    }
    return sum
}

console.log("sum of all elements of an array",sumArray(array))





// Find Maximum Value:
// Create a function to find the maximum value in an array of numbers.

function maximum(array){
    let highest = array[0]
    // console.log(highest)
    for(var i=0; i<array.length;i++){
        if(highest<array[i]){
            highest = array[i]
        }
    }
    return highest
}

console.log("maximum value of an element in an array is -",maximum(array))




// Even Number Count:
// Write a function that counts the number of even numbers in an array.

function calculateEven(array){
    let add = 0
    for(var i=0; i<array.length;i++){
        if (array[i]%2==0){
            add = add + 1
        // console.log(add)
        }
    }
    return add
}

console.log("addition of even no. in array =",calculateEven(array))







// Factorial Calculation:
// Create a function to calculate the factorial of a given number.

let number = 6

function factorial(num){
  let  multiply = 1
    for(var i = 1 ; i<=num;i++){
        multiply = multiply*i
    }
    return multiply
}

console.log("factorial of the given no. is =",factorial(number))
















// Calculate Average:
// Write a function to calculate the average of numbers in an array.


function average(list){
    var calc = 0 
    for(var i=0;i<list.length;i++){
        calc = calc+list[i]
    }
    return calc/ list.length
}

console.log("average of all elements of an array",average(array))





// Reverse Array:
// Implement a function that reverses the order of elements in an array without using the reverse method.

function reverse(array){
    let newarr = []
 for (var i = array.length-1;i>=0;i--){
    // console.log(array[i])
    newarr.push(array[i])
 }
 return newarr
}

console.log(reverse(array))