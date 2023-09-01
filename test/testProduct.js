function register(event){
    event.preventDefault()

 let name=   document.getElementById("userName").value
let price=  document.getElementById("price").value
let image = document.getElementById("image").value

console.log(name,price,image)
if(name && price && image){
    // alert("great")
    let data = { pName: name,pPrice: price,pImage: image }
   
   let array =JSON.parse(localStorage.getItem("users")) || []
    array.push(data);
    localStorage.setItem("users",JSON.stringify(array)) 
    return array
}
else{
    alert("incomplete")
}

}