// alert("Welcome!");



// let name = document.getElementById("name").value;
//let name=prompt("Enter your name");

// function ioname(){
//     let name = document.getElementById("name").value;
//     return name;
// }

// function ioemail(){
//     let email = document.getElementById("email").value;
// }

// function iopass(){
//     let password = document.getElementById("password").value;
// }

// function iophone(){
//     let phone = document.getElementById("phone").value;
// }

// function sayHello(){
//     alert(`Hello ${name}, your email is ${email}, your password is ${password} and finally your phone number is ${phone}`);
// }



function validateForm(){
    if (event) event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let phone = document.querySelector("#phone").value;

    if (name === ""){
        alert("Please enter your name:");
        return false;
    }

    let emailPattern = /.+@.+/;
    if (!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)){
        alert("Phone number must be 10 digits.");
        return false;
    }

    if (password.length<6){
        alert("Password must be of more than 6 characters.");
        return false;
    }
    
    alert("Student Registration Successful!");
    return true;
};


  


