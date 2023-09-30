let bodyColor = document.getElementById("color").style.backgroundColor = "black"



playerOne = "X"
playerTwo = "O"
let writeX = document.getElementsByClassName("first_choice one")[0] 
writeX.onclick = () => {
    writeX.innerHTML = playerTwo
}

let writeO= document.getElementsByClassName("header_options")[0] 
writeX.onclick = () => {
    writeO.innerHTML = playerOne
}

// function writeX () {

// }

