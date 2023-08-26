// js fn() that takes any array of strings as imput and returns a new array containing the lengths of those strings

let string = ["yash","tejas","shreyas","sameer"]
// console.log(string)
// function stringArray(array){

// for(var i;i<array.length; i++){
//    let result = console.log("length of array- " )
//     return result
// }
// }

function stringArray(array){
    // for (var i=0;i<array.length;i++){
    // console.log(array[i])
    console.log(array.length)
    
// }
   
}

// stringArray(string)


// js fn that takes an array of numbers as input and returns a new array with only the even numbers from the original array

let numberArr= [1,54,65,68,8,15, 86, 35, 40,51]
// console.log (numberArr)

// console.log(numberArr)
function number(numbArr){
    let nArray = []
    for (var i=0; i<numbArr.length;i++){
        if(numbArr[i]%2 == 0){
           
            nArray.push(numbArr[i]) 
            console.log(nArray)
        }

    }
}

// number(numberArr)

    // Question 4

    let arr1 =[1,5,67,35,97,2,4,6,23]
    let arr2 = [2,5,47,86,4,6,57,23]

    function concat(first, second){
        let array = []
       
        
        for (var i=0;i<first.length;i++){
        
            
            for(var j= 0;j<second.length;j++){
                // console.log(second[j])
                if(first[i]==second[j])
                array.push(first[i])
                
            }
            
        }
        console.log("new array -",array)
       
    }

    concat(arr1, arr2)