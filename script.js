body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
}

.app {
  max-width: 800px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* HEADER */
.header {
  background: linear-gradient(90deg, #2563eb, #22c55e);
  color: white;
  padding: 15px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.tagline {
  font-size: 12px;
  opacity: 0.9;
}

/* CHAT */
.chat {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* MESSAGES */
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

/* INPUT */
.input-area {
  display: flex;
  padding: 10px;
  background: white;
  border-top: 1px solid #ddd;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.input-area button {
  margin-left: 10px;
  padding: 10px 15px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
