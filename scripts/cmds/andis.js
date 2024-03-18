const axios = require('axios');

module.exports = {
  config: {
    name: "andisearch",
    aliases: ["andis"],
    version: "1.0",
    author: "Xue Editz",
    countdown: 5,
    role: 0,
    shortDescription: {
      en: "Search for something using the Andi API",
      tl: "Maghanap ng isang bagay gamit ang Andi API"
    },
    longDescription: {
      en: "Search for something using the Andi API",
      tl: "Maghanap ng isang bagay gamit ang Andi API"
    },
    category: "goatBot",
    guide: {
      en: "{p}andisearch <query>",
      tl: "{p}andisearch <query>"
    }
  },
  
  // The onStart function
  onStart: async function ({ event, message, args }) {
    // Check if a query was provided
    if (!args[0]) {
      message.reply("Please provide a query.");
      return;
    }
    
    try {
      // Make a GET request to the Andi API
      const response = await axios.get(`http://api.andi.now.sh/search?q=${encodeURIComponent(args.join(' '))}`);
      
      // Extract the search results from the response
      const results = response.data.results;
      
      // Check if there are any results
      if (results.length === 0) {
        message.reply("No results found.");
        return;
      }
      
      // Loop through the results and send them as messages
      for (const result of results) {
        message.reply(result.title + " - " + result.url);
      }
    } catch (error) {
      console.log(error);
      message.reply("An error occurred while fetching the search results.");
    }
  }
}