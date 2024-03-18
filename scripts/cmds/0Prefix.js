const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "prefix0",
    version: "1.0",
    author: "Leeza / Yuki",
    countDown: 0,
    role: 0,
    shortDescription: { vi: "", en: "" },
    longDescription: { vi: "", en: "" },
    category: "owner",
    guide: { en: "" },
    envConfig: {}
  },
  onStart: async function ({ message }) {
    const botName = "[ * ] |• AnYa";
    const botPrefix = "*";
    const authorName = "YukiNori - Leeza";
    const urls = JSON.parse(fs.readFileSync('yuki.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    message.reply({
      body: `《  prefix 》
\Name: ${botName}
\Bot Prefix: ${botPrefix}
\owner: ${authorName}
\===============`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },
  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      this.onStart({ message });
    }
  }
};