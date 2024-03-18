module.exports = {
  config: {
    name: "spamkick",
    aliases: ["skick"],
    version: "1.0",
    author: "GoatAI by LiANE",
    countDown: 5,
    role: 1,
    shortDescription: {
      en: "Kick spammers",
      tl: "Kick spammers"
    },
    longDescription: {
      en: "Kick spammers from the group",
      tl: "Kick spammers from the group"
    },
    category: "goatBot",
    guide: {
      en: "{p}spamkick <user>",
      tl: "{p}spamkick <user>"
    }
  },
  onStart: async function ({ event, message, event, args, threadsData, usersData, api, commandName, role }) {
    if (args.length < 1) {
      message.reply("Please specify a user to kick.");
      return;
    }

    const user = args[0]; // Get the user from the command arguments
    const threadID = event.threadID;

    // Check if the user is an admin
    const threadInfo = await api.getThreadInfo(threadID);
    const admins = threadInfo.adminIDs;
    
    if (!admins.includes(user)) {
      // If the user is not an admin, kick them from the group
      api.removeUserFromGroup(user, threadID);
      message.reply(`Successfully kicked user with ID: ${user}`);
    } else {
      message.reply("You can't kick an admin from the group.");
    }
  }
};