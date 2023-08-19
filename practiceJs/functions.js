var array=[1,8,2,3,4,9,5,6,7,8,10,9,10,2,5,3,8,4,8,9,6]


    // console.log(array.indexOf(8))




function count(array){
    var total = 0
    for(var i=0;i<array.length;i++){
        total=total+array[i]
    }
    console.log("total addition of an array is="+ total)
}

count(array)

var findNo=8
function arrCount(arr,No){
    
    console.log("position of "+ findNo + " in array are -" )
    for(var f=0;f<arr.length;f++){
        if(findNo==arr[f]){
          console.log(f)  
        }
    }

}
arrCount(array,findNo)


// function add(add){
//     addition=0
//     for(var a=0;a<add.length;a++){
//         addition= addition + add[a]
//         console.log(addition)
//     }
// }

// add(array)




// find=10
// for(var i=0;i<array.length-2;i++){
//     for(var j=i+1 ; j<array.length-1;j++){

//         for(var k=j+1 ; k<array.length;k++){
//             if(array[i]+array[j]+array[k]==find){
//                 console.log(array[i],array[j],array[k])
//             }
//         }
//     }
    


// }


// ? find how many no. of elements are present in the  array


function totalElements(arr){
    var totalEle=0
    for(var i=0;i<arr.length;i++){
        totalEle=i
    }
    return totalEle
}

totalElements(array)