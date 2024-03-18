module.exports = {
  config: {
    name: "block",
    aliases: [],
    version: "1.0",
    author: "Xue Editz", //please don't change author name this is my 4th command
    role: 0,
    shortDescription: {
      en: "Block a user"
    },
    longDescription: {
      en: "This command allows you to block a user."
    },
    category: "admin",
    guide: {
      en: "{p}block <user>"
    },
  },

  onStart: async function ({ event, args, api }) {
    const userToBlock = args[0]; // Get the user to block from the command arguments

    // Check if the user to block is provided
    if (!userToBlock) {
      message.reply("Please provide a user to block.");
      return;
    }

    // Use the API object to block the user
    api.blockUser(userToBlock, (err) => {
      if (err) {
        message.reply("Failed to block the user.");
      } else {
        message.reply(`User ${userToBlock} has been blocked successfully.`);
      }
    });
  }
}