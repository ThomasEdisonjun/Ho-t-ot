const axios = require('axios');
module.exports = {
  config: {
    name: "fbvid",
    version: "1.0",
    author: "sobit",
    countDown: 15,
    role: 0,
    longDescription: "Download facebook video.",
    category: "media",
    guide: {
      en:"{pn} link"
    }
  },

  onStart: async function ({ message, args }) {
    const link = args.join(" ");
    if (!link)
      return message.reply(`Please provide the link to the Instagram video.`);
    else {
      const BASE_URL = `https://fbdl.api-tu33rtle.repl.co/api/videofb?url=${encodeURIComponent(link)}`;

      message.reply("⬇ | AnYa 💋❤‍🩹downloading the video for you");

      try {
        let res = await axios.get(BASE_URL);
        let videoUrl = res.data.hd;

        const response = {
          attachment: await global.utils.getStreamFromURL(videoUrl)
        };

        await message.reply(response);
      } catch (e) {
        message.reply(` download vaina arko try garnu.`);
      }
    }
  }
};