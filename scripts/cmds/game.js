module.exports = {
  config: {
    name: "game",
    aliases: [],
    version: "1.0",
    author: "Xue Editz",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Play a game with anya!"
    },
    longDescription: {
      en: "Play a game with anya! Enjoy some fun and entertainment."
    },
    category: "fun",
    guide: {
      en: "{p}game"
    }
  },
  
  onStart: async function ({ event, message, event, args, threadsData, usersData, api, commandName, role }) {
    // Game logic goes here
    message.reply("Let's play a game! What game would you like to play?");
  },
}