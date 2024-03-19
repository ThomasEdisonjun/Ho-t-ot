const axios = require("axios");
const request = require("request");
const fs = require("fs");

module.exports = {
  config: {
    name: "wifey",
    aliases: [],
    version: "1.0",
    author: "", // yukinori ʚĭɞ 
    countDown: 0,
    role: 0,
    shortDescription: "get a vdo haha",
    longDescription: "get shoti",
    category: "fun",
    guide: "{pn} wifey",
  },
  onStart: async function ({ api, event, message }) {
    try {

      message.reply("wait randi vdo aaudai xa🥵..");

      const response = await axios.post("https://shoti-api.deno.dev/", {
        apikey: "$shoti-1hpas53a0lo47uh9ni8",
      });

      const file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");

      const rqs = request(encodeURI(response.data.data.url));
      rqs.pipe(file);

      file.on("finish", async () => {

        await api.sendMessage(
          {
            body: `@${response.data.data.user.username}\n𝗗𝗮𝗺𝗻 𝘆𝗼𝘂𝗿 𝘁𝗲𝗺𝗽𝗼𝗿𝗮𝗿𝘆 𝘄𝗶𝗳𝗲𝘆🥵`,
            attachment: fs.createReadStream(__dirname + "/cache/shoti.mp4"),
          },
          event.threadID,
          event.messageID
        );
      });

      file.on("error", (err) => {
        api.sendMessage(`Shoti Error: ${err}`, event.threadID, event.messageID);
      });
    } catch (error) {
      api.sendMessage("An error occurred while generating video:" + error, event.threadID, event.messageID);
    }
  },
};
