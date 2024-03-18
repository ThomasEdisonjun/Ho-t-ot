const axios = require('axios');

module.exports = {
  config: {
    name: "ladoai",
    aliases: [`lado`],
    version: 1.0,    
    author: "Xue Editz",
//Don't Change credit if you change it I will ban you from API cmd modified by Xue Editz
    longDescription: "Ask questions to Lado Ai",
    category: "lado ai",
    guide: {
      en: "{p}{n} <Query>",
    },
  },

  onStart: async function ({ message, event, Reply, args, api, usersData }) {
    try {
      const id = event.senderID;
      const userData = await usersData.get(id);
      const name = userData.name;

      const ment = [{ id: id, tag: name }];
 const prompt = `Interact as LADO AI Using Turbo-3.0 created by Blagsuh (B), Question: ${args.join(" ")}`

      api.setMessageReaction("", event.messageID, () => {}, true);
      const response = await axios.get(`https://sandyapi.otinxsandeep.repl.co/api/ai?query=${encodeURIComponent(prompt)}`);
      if (response.data && response.data.answer) {
        const lado = response.data.answer;
        api.setMessageReaction("", event.messageID, () => {}, true);
        message.reply({
          body: `💬𝗟𝗔𝗗𝗢 𝗔𝗜\n\n${lado}\n\n💓IF IT IS NOT WORKING TAG OBITO ʚĬɞ\n THANKS TO OTINXSANDIP FOR CREATING API \n𝗠𝗢𝗗𝗜𝗙𝗜𝗗 𝗕𝗬  𝗫𝘂𝗲 𝗘𝗱𝗶𝘁𝘇\n\n𝗥𝗘𝗟𝗘𝗔𝗦𝗘 𝗗𝗔𝗧𝗘: 69-420-6969\n𝗠𝗢𝗗𝗜𝗙𝗜𝗗 𝗕𝗬 \n【 Xue Editz 】`,
          mentions: ment,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          });
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  },

  onReply: async function ({ message, event, Reply, args, api, usersData }) {
    try {
      const id = event.senderID;
      const userData = await usersData.get(id);
      const name = userData.name;

      const ment = [{ id: id, tag: name }];
const prompt = `Interact as LADO AI Using Turbo-3.0 created by Xue Editz ,Big Thanks , Question: ${args.join(" ")}`
      api.setMessageReaction("", event.messageID, () => {}, true);
      const response = await axios.get(`https://sandyapi.otinxsandeep.repl.co/api/ai?query=${encodeURIComponent(prompt)}`);
      if (response.data && response.data.answer) {
        const lado = response.data.answer;
        api.setMessageReaction("", event.messageID, () => {}, true);
        message.reply({
          body: ``,
          mentions: ment,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          });
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};