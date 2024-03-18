module.exports = {
  config: {
    name: "corn",
    aliases: [],
    version: "1.0",
    author: "Xue Editz",
    countdown: 5,
    role: 0,
    shortDescription: {
      en: "Corn Command"
    },
    longDescription: {
      en: "This command displays information about corn."
    },
    category: "corn💀",
    guide: {
      en: "{p}corn"
    },
  },
  onStart: async function ({ event, message }) {
    // Add your code here to display information about corn
    message.reply("Corn is a cereal grain that is a staple food in many parts of the world.");
  },
};