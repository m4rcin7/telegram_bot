const { get } = require("./axios");

function sendMessage(chatId, messageText) {
  return get("sendMessage", {
    chat_id: chatId,
    text: messageText,
  });
}

async function handle(req, res) {
  const body = req.body;

  if (!body || !body.message) {
    return res.sendStatus(400);
  }

  const messageObj = body.message;
  const chatId = messageObj.chat.id;
  const messageText = messageObj.text || "";

  if (!isNaN(messageText)) {
    const number = parseInt(messageText);
    switch (number) {
      case 1:
        return sendMessage(chatId, "Wybrałeś liczbę 1!");
      case 2:
        return sendMessage(chatId, "Wybrałeś liczbę 2!");
      case 3:
        return sendMessage(chatId, "Wybrałeś liczbę 3!");
      case 4:
        return sendMessage(chatId, "Wybrałeś liczbę 4!");
      case 5:
        return sendMessage(chatId, "Wybrałeś liczbę 5!");
      default:
        return sendMessage(chatId, "Wybierz liczbę od 1 do 5.");
    }
  }

  if (messageText.charAt(0) === "/") {
    const command = messageText.substr(1);
    switch (command) {
      case "start":
        return sendMessage(
          chatId,
          "Cześć! Wybierz liczbę od 1 do 5, a odpowiem Ci!"
        );
      default:
        return sendMessage(chatId, "Nie rozumiem tej komendy.");
    }
  } else {
    return sendMessage(chatId, "Wpisz liczbę od 1 do 5.");
  }
}

module.exports = { handle };
