function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var confirmPassword = document.getElementById("userConfirmPassword").value
 // console.log(name,"name here");
    // console.log(email,"email here");
    // console.log(password,"password here");
    // console.log(confirmPassword,"confirmPassword here");

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {

                var LS = JSON.parse(localStorage.getItem("USERS")) || []

                var flagForEmail = false;
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].useremail == email) {
                        flagForEmail = true;
                    }
                }
                if (!flagForEmail) {
                    var data = {
                        namee: name,
                        useremail: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                    LS.push(data);
                    localStorage.setItem("USERS", JSON.stringify(LS));
                    alert("registration successful")
                    window.location.href="./login.html"
                    document.getElementById("userName").value= "";
                    document.getElementById("userEmail").value= "";
                    document.getElementById("userPassword").value= "";
                    document.getElementById("userConfirmPassword").value= "";

                } else {
                    alert("email already exist");
                }

            } else {
                alert("password not matched");
            }
        } else {
            alert("password should be 8 or more digit");
        }
    } else {
        alert("fill all the fields");
    }

}


function login(event){
    event.preventDefault();
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    if(email && password){
        var flag = false;
        var  LS = JSON.parse(localStorage.getItem("USERS"));
        for(var i =0; i<LS.length; i++){
            if(LS[i].useremail == email && LS[i].password == password ){
                flag= true;
            }
        }
        if(flag == true){
            alert("login successful")
            window.location.href="./index.html";
        }else{
            alert("credentials not matched")
        }
    }else{
        alert("fill all the fields");
    }
   
}