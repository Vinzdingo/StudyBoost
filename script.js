body {
  margin: 0;
  font-family: Arial;
  background: #f4f7fb;
}

.app {
  max-width: 800px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(90deg, #2563eb, #22c55e);
  color: white;
  padding: 15px;
}

.header h1 {
  margin: 0;
}

.chat {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.msg {
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
  white-space: pre-wrap;
}

.user {
  background: #2563eb;
  color: white;
  align-self: flex-end;
}

.bot {
  background: #22c55e;
  color: white;
  align-self: flex-start;
}

.input-box {
  display: flex;
  padding: 10px;
  background: white;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  margin-left: 10px;
  padding: 10px 15px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
