const axios = require("axios");
const { getStreamFromURL } = global.utils;
const fs = require("fs");

module.exports = {
  config: {
    name: "pokemon",
    version: "1.0",
    author: "MILAN",
    countDown: 15,
    role: 0,
    shortDescription: {
      en: "pokemon game"
    },
    longDescription: {
      en: "Reply with the name of a pokemon"
    },
    category: "game",
    guide: {
      en: "{pn}"
    },
    envConfig: {
      reward: 60
    }
  },

  langs: {
    en: {
      correct: "✅ | Congratulations, you answered correctly and received %1$"
    }
  },

  onStart: async function ({ message, event, commandName, getLang, usersData, envCommands}) {
    const userName = await usersData.getName(event.senderID);
    const response = await axios.get('https://milanbhandari.xemonz.repl.co/pokemon');
    const quizData = response.data;
    const { pokemon, link } = quizData;
    message.reply({ 
      body: '✅ | Reply with the name of the pokemon', attachment: await getStreamFromURL(link)}, 
      (err, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName,
          messageID: info.messageID,
          author: event.senderID,
          answer: quizData.pokemon,
          name: userName
        });
      });
  },

  onReply: async ({ message, Reply, event, getLang, usersData, envCommands, commandName }) => {
    const userName = await usersData.getName(event.senderID);
    const { author, messageID, answer } = Reply;
    if (event.senderID != author)
      return message.reply(("⚠️ | You are not the player of this question"));

    if (formatText(event.body) == formatText(answer)) {
      global.GoatBot.onReply.delete(messageID);
      message.unsend(Reply.messageID);
      await usersData.addMoney(event.senderID, envCommands[commandName].reward);
      message.reply(getLang("correct", envCommands[commandName].reward));
    }
    else {
      message.reply(`❌ | ${userName}, You gave the wrong answer\nThe correct answer is ${answer}.`);
      global.GoatBot.onReply.delete(messageID);
      message.unsend(Reply.messageID);
    }
  }
};

function formatText(text) {
  return text.normalize("NFD")
    .toLowerCase()
}