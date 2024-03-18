module.exports = {
  config: {
    name: "sad",
    aliases: ["s"],
    role: 0,
    category: "goatBot",
    shortDescription: {
      en: "Xue - Express your sadness"
    },
    longDescription: {
      en: "Xue - Express your sadness with a sad message"
    },
    guide: {
      en: "{p}sad"
    }
  },
  onStart: async function ({ message }) {
    message.reply("I'm sorry to hear that you're feeling sad. Is there anything I can do to help?");
  }
};