function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value.trim();
  if (text === "") return;

  // USER MESSAGE
  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = text;
  chat.appendChild(userMsg);

  // BOT RESPONSE
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";

    botMsg.innerText =
      "💡 Hint:\n" +
      "1. Start simpelt\n" +
      "2. Del problemet op\n" +
      "3. Prøv selv først\n\n" +
      "🧾 Dit input: " + text;

    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;
  }, 300);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
