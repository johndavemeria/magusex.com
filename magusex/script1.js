
    function create(){
    
        let email2 = document.getElementById("email").value;
        let password2 = document.getElementById("password").value;
    
        //stored data
      
        localStorage.setItem("email",email2);
        localStorage.setItem("password",password2);
    
        alert("account created!");
    }

function login(){
    let webEmail = document.getElementById("email1").value;
    let webPass = document.getElementById("password1").value;

    //relet storedUsername = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if(webEmail === storedEmail && webPass === storedPassword){
        window.location = "main.html";
        alert("log in successfull!");
    }else{
        alert("log in failed!, incorrect email or password.");
    }

}