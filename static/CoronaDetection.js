console.log("Corona Detection Enabled !");


chat = ["Hi, welcome to SimpleChat! Go ahead and send me a message"]
user = ["rasa"]
var msg = ""

if (sessionStorage.getItem("chat") == null)
    sessionStorage.setItem("chat", JSON.stringify(chat))
if (sessionStorage.getItem("user") == null)
    sessionStorage.setItem("user", JSON.stringify(user))

function getUserReq(e) {
    // e.preventDefault()
    const request = document.getElementById("text").value
        // console.log(request)
    console.log(JSON.parse(sessionStorage.getItem("chat")))
    updateChat(request, "user")
    displayChat()
    window.scrollTo(0, 500);
}

function updateChat(data, user) {
    var a = [];
    var b = []
    a = JSON.parse(sessionStorage.getItem('chat')) || [];
    b = JSON.parse(sessionStorage.getItem('user')) || [];
    a.push(data);
    b.push(user);
    sessionStorage.setItem('chat', JSON.stringify(a));
    sessionStorage.setItem('user', JSON.stringify(b));
}

function displayChat() {
    chat = JSON.parse(sessionStorage.getItem("chat"))
    user = JSON.parse(sessionStorage.getItem("user"))
    console.log(chat)
    console.log(user)

    // const userInput = "<div class='msg right-msg'><div class='msg-bubble'><div class='msg-text'>" + request + "</div></div></div>"
    // document.querySelector(".msger-chat").innerHTML += userInput
    for (let i = 1; i < user.length; i++) {
        var className = ""
        if (user[i] == "user")
            className = "msg right-msg"
        else
            className = "msg left-msg"

        msg += "<div class='" + className + "'><div class='msg-bubble'><div class='msg-text'>" + chat[i] + "</div></div></div>"
    }

    // showMessages(msg)
}



// if (response === "Bye") {
//     console.log("function call successful")
// }