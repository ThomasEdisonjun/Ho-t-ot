module.exports = {
  config: {
    name: "xue",
    version: "1.0",
    author: "xue editz",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "🌊xue-editz🌊",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "xue") {
      return message.reply({
        body: "🌊𝗚𝗢𝗗𝗗𝗘𝗦𝗦-XUE🌊\n➤𝗧𝗬𝗣𝗘 [*Callad]⊶⊷⊷✶:\n to contact Him☆\n》𝗙𝗕:https://www.facebook.com/profile.php?id=100049522025179",
        attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/8kHpYchj/2471fd0beefcc035b2c332fa66e5e2d3.jpg")
      });
    }
  }
}