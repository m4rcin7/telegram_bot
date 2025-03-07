const { handleMessage } = require("./lib/Telegram");

async function handle(req, res) {
  if (body) {
    const messageObj = body.message;
    await handleMessage(messageObj);
  }
  return;
}

module.exports = { handle };
