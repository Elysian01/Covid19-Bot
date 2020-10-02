console.log("Corona Detection Enabled !");

function getUserReq(e) {
    // e.preventDefault()
    const request = document.getElementById("text").value
    console.log(request)
    const userInput = "<div class='msg right-msg'><div class='msg-bubble'><div class='msg-text'>" + request + "</div></div></div>"
    document.querySelector(".msger-chat").innerHTML += userInput
}



if (response === "Bye") {
    console.log("function call successful")
}