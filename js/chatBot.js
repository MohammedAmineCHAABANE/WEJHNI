var chatbot = document.getElementById("chatB");
chatbot.style.display = "none";
function funChatbot() {

  if (chatbot.style.display === "none") {
    chatbot.style.display = "block";
  } else {
    chatbot.style.display = "none";
  }
}