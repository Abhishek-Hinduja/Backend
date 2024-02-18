var input = document.getElementById("input")
var btn = document.getElementById("btn")

var parent = document.getElementById("parent")

btn.addEventListener("click", (e)=>{

    var request = new XMLHttpRequest()
    request.open("post", "/save")
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify({todo:input.value}))
    request.addEventListener("load", ()=>{
        if (input.value){
            var li = document.createElement("li")
            li.innerHTML = input.value
            parent.appendChild(li)
            input.value = ""
            }
    })
   
})


var request = new XMLHttpRequest()
request.open("get", "/gettodo")
request.send()
request.addEventListener("load", (e)=>{
    let valueobtained = JSON.parse(request.responseText)
    valueobtained.forEach((value)=>{
        var li = document.createElement("li")
        li.innerHTML = value.todo
        console.log(value)
        parent.appendChild(li)
        input.value = ""  
    })
})