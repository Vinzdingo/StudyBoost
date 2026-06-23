function addMessage(text, type) {
  const chat = document.getElementById("chat");

  const div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("input");
  const text = input.value.trim();

  if (text === "") return;

  // user message
  addMessage(text, "user");

  // bot reply
  setTimeout(() => {
    addMessage(
`💡 Hint 1: Tænk simpelt
💡 Hint 2: Del problemet op
💡 Hint 3: Prøv selv først
🧾 Forklaring: ${text}`,
      "bot"
    );
  }, 500);

  input.value = "";
}
