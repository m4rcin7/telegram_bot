const { handleMessage } = require("./lib/Telegram");

async function handle(req, res) {
  const { body } = req;
  if (body) {
    const messageObj = body.message;
    await handleMessage(messageObj);
  }
  return;
}

module.exports = { handle };
