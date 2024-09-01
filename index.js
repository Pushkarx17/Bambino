function printalert(anytext){
    alert(anytext)
}


function returnreply(){
    let input = document.getElementById("userreply").value
    const fs = require('fs')
    fs.writeFile('reply.txt',input, (err) =>{
        if (err) throw err;
    })
}