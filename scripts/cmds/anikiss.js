module.exports = {
  config: {
    name: "anikiss",
    aliases: [],
    version: "1.0",
    author: "Xue Editz",
    countDown: 3,
    role: 0,
    shortDescription: {
      en: "Send a random kiss gif"
    },
    longDescription: {
      en: "Send a random kiss gif using the waifu.pics API"
    },
    category: "fun",
    guide: {
      en: "{p}kiss"
    },
  },
  
  onStart: async function ({ event, message, args, api }) {
    const fetch = require('node-fetch');
    
    // Call the Waifu.pics API to get a random kiss gif
    const response = await fetch('https://api.waifu.pics/sfw/kiss');
    const data = await response.json();
    
    // Get the gif URL from the API response
    const gifUrl = data.url;
    
    // Create the message with the gif and author name
    const form = {
      body: gifUrl,
      attachment: await global.utils.getStreamFromURL(gifUrl),
      mentions: [{
        tag: "Sobit Tamang",
        id: "100092377898995" // Replace <AUTHOR_ID> with the actual author ID
      }]
    }
    
    // Send the message
    message.reply(form);
  }
}