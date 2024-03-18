var Username = document.getElementById("Username")
var password = document.getElementById("password")
var login = document.getElementById("login")
console.log("hhh")

login.addEventListener("click", function(){
    if(Username.value && password.value){
        var request = new XMLHttpRequest()
        request.open("post", "/login")
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify({username:Username.value, password:password.value}))

        request.addEventListener("load", function(){
            if (request.status == 200){
                window.location.href = "/"
            }
            else{
                console.log("login error ", request.responseText)
            }
        })
    }
})