var btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    var name=document.getElementById("nameinput").value
    var age=document.getElementById("ageinput").value
    var gender=document.querySelector('input[name="gender"]:checked')?.value
    var course=document.getElementById("courseinput").value
    var email=document.getElementById("emailinput").value
    if(!name || !age ||  !course || !email || !gender)
    {
        alert("Please fill all fields in the form")
        return
    }
    const tbody=document.querySelector(".studenttable")
    const row=tbody.insertRow()
    row.insertCell(0).textContent=name
    row.insertCell(1).textContent=age
    row.insertCell(2).textContent=course
    row.insertCell(3).textContent=gender
    row.insertCell(4).textContent=email
    const action=row.insertCell(5)
    var delbtn=document.createElement("button")
    delbtn.textContent="Delete"
    delbtn.className="deletebtn"
    delbtn.addEventListener("click",function(){
        row.remove()
    })
    action.appendChild(delbtn)
   })
    


