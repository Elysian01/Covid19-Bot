console.log("Corona Detection Enabled !");

chat = ["Hi, I am a COVID bot."]
user = ["rasa"]
var msg = "";

if (sessionStorage.getItem("chat") == null)
    sessionStorage.setItem("chat", JSON.stringify(chat))
if (sessionStorage.getItem("user") == null)
    sessionStorage.setItem("user", JSON.stringify(user))
if (sessionStorage.getItem("coronaTest") == null)
    sessionStorage.setItem("coronaTest", "deactive")


function getUserReq(e) {
    const request = document.getElementById("text").value
        // console.log(request)
    let userInput = "<div class='msg right-msg'><div class='msg-bubble'><div class='msg-text'>" + request + "</div></div></div>"
    userInput += "<div class='msg leftt-msg'><div class='msg-bubble'><div class='msg-text'>" + "typing" + "<b> . . . </b>" + "</b></div></div></div>"
    document.querySelector(".msger-chat").innerHTML += userInput

    chatWindow = document.querySelector(".msger-chat");
    var xH = chatWindow.scrollHeight;
    chatWindow.scrollTo(0, xH + 100);

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

        var markdown_chat = chat[i].replace(/&lt;/g, "<")
        var markdown_chat = markdown_chat.replace(/&gt;/g, ">")

        msg += "<div class='" + className + "'><div class='msg-bubble'><div class='msg-text'>" + markdown_chat + "</div></div></div>"
    }

}

// function startCovidTesting() {
//     start_chatbot();
// }
// function reset() {
//     sessionStorage.clear();
//     const banner = "<div class='msg left-msg'><div class='msg-bubble'><div class='msg-text'>" +
//         "Hi, I am a COVID bot. 😄" +
//         "</div></div></div>"
//     document.querySelector(".msger-chat").innerHTML = banner
// }