module.exports = {
  config: {
    name: "andisearch",
    aliases: ["andis"],
    version: "1.0",
    author: "Xue Editz",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "AI-powered search command",
      tl: "Paghahanap na pinapagalaw ng AI",
    },
    longDescription: {
      en: "An AI-powered search command that uses AI to fetch search results without an API key.",
      tl: "Isang kumandong pinapagalaw ng AI na gumagamit ng AI upang kumuha ng mga resulta sa paghahanap nang walang API key.",
    },
    category: "media",
    guide: {
      en: "{p}andisearch <query>"
    },
  },
  onStart: async function ({ event, message, args, api }) {
    // Implement the logic for the 'andisearch' command here
  },
};
onStart: async function ({ event, message, args, api }) {
  const searchQuery = args.join(" "); // Extract the search query from the command arguments

  try {
    const response = await api.getFriends(); // Replace this with your custom search logic

    if (response.status === 200) {
      const searchResults = response.data.results; // Replace "results" with the property that contains the search results in your API response

      if (searchResults.length > 0) {
        const searchResult = searchResults[0]; // Replace "0" with the index of the search result you want to display

        // Build the response message with the search result
        const resultMessage = `Search Result:\nTitle: ${searchResult.title}\nDescription: ${searchResult.description}\nURL: ${searchResult.url}`;

        message.reply(resultMessage); // Respond with the search result message
      } else {
        message.reply("No search results found."); // Respond if no search results were found
      }
    } else {
      message.reply("An error occurred while fetching search results."); // Respond if an error occurred
    }
  } catch (error) {
    console.error(error);
    message.reply("An error occurred while executing the command."); // Respond if an error occurred
  }
},