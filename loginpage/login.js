function register(event) {
    event.preventDefault();

    const userName = document.getElementById("username").value
    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value
    const userConfirmPassword = document.getElementById("userConfirmPassword").value
    console.log(userName, userEmail, userPassword, userConfirmPassword)

    if (userName && userEmail && userPassword && userConfirmPassword) {
        if (userPassword === userConfirmPassword) {
            alert("registration successful")

            userObject = { name: userName, email: userEmail, password: userPassword }

            var array = JSON.parse(localStorage.getItem("users")) || []

            array.push(userObject)

            localStorage.setItem("users", JSON.stringify(array))
            console.log(array)

        }
        else {
            alert("recheck passoword")
        }

    }
    else {
        alert("incomplete")
    }

}

function validate(event) {
    event.preventDefault();

    var email = JSON.stringify(document.getElementById("mailAdd").value)
    var pass = JSON.stringify(document.getElementById("mailPass").value)

    let users = JSON.parse(localStorage.getItem("users"));
    if (email && pass) {
        for (var i = 0; i < users.length; i++) {
            let registeredEmail = JSON.stringify(users[i].email);
            let registeredPassword = JSON.stringify(users[i].password);
            let registeredName = JSON.stringify(users[i].name)
            // console.log([i])
            if (registeredEmail == email && registeredPassword == pass) {
                // alert("correct")
                // console.log(email)
                // console.log(registeredName)
                // console.log(typeof users)
                // var flag = true
                show = JSON.parse(registeredName)
                var pop = document.getElementById("popup")
                pop.innerText = "welcome " + show + "!";

            }

            else {
                flag = false
                
            }
        }

        // console.log(email,pass)
    }
    else {
        alert("incomplete")
    }

    // document.getElementById("mailAdd").value = ""
    // document.getElementById("mailPass").value = ""

}




function checkUser(event) {
    event.preventDefault();

    // var email = JSON.stringify(document.getElementById("userEmail").value)
    var email = document.getElementById("userEmail").value
    // var pass = JSON.stringify(document.getElementById("userPassword").value)

    let users = JSON.parse(localStorage.getItem("users"));
   
            // let registeredEmail = JSON.stringify(users[i].email);
            // let registeredPassword = JSON.stringify(users[i].password);
            // let registeredName = JSON.stringify(users[i].name)
            // console.log([i])
            
            var find = users.includes(email)
            if(find){
                console.log("already exists")
            }
        }

