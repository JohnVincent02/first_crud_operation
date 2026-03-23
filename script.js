let users=[]


const form=document.getElementById("userForm")
const tableBody=document.getElementById("tableBody")
const editIndexInput=document.getElementById("editIndex")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // get name & email
    const name= document.getElementById("name").value
        const email= document.getElementById("email").value
        // add name and email to users array

        if(editIndexInput.value==""){
                    users.push({name, email})

        }
else{            
    users[editIndexInput.value]={name,email}
    editIndexInput.value=""
}
        form.reset()
        console.log(users);
        displayUsers()
        
})

const displayUsers =() =>{
    tableBody.innerHTML=""
    users.forEach((user, index)=>{
        tableBody.innerHTML +=`<tr>
                <td>${index+1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <div class="d-flex">
                    <button onclick="editUser(${index})" class="btn btn-warning">Edit</button>
                    <button onclick="deleteUser(${index})" class="btn btn-danger">Delete</button>
                 
                    </div>
                </td>
            </tr>`
    })
}

// edit user

const editUser=(index)=>{
    document.getElementById("name").value=users[index].name
        document.getElementById("email").value=users[index].email
        editIndexInput.value=index

}

// delete User

const deleteUser=(index)=>{
    if(confirm("Are you sure, want to delete dat?")){
        users.splice(index,1)
        displayUsers()
    }
}