module.exports = {
  config: {
    name: "happy",
    aliases: ["h"],
    version: "1.0",
    author: "Xue Editz",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Xue - Spread happiness!"
    },
    longDescription: {
      en: "Xue - Spread happiness with the happy command!"
    },
    category: "happy",
    guide: {
      en: "{p}happy"
    }
  },

  onStart: async function ({ message, event, api }) {
    const happyMessages = [
      "I hope this makes you happy! 🌟",
      "May your day be filled with joy and laughter! 😄",
      "Sending happiness your way! 🌈",
      "Remember to always smile and be happy! 😊",
      "Here's a little dose of happiness just for you! 🌞"
    ];

    const randomMessage = happyMessages[Math.floor(Math.random() * happyMessages.length)];

    message.reply(randomMessage);
  }
};