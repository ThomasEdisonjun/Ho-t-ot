module.exports = {
  config: {
    name: "stealmoney",
    aliases: ["rob"],
    version: "1.0",
    author: "xue editz",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Steal money from other members",
      tl: "Magnakaw ng pera mula sa ibang miyembro"
    },
    longDescription: {
      en: "This command allows you to steal money from other members. Use with caution!",
      tl: "Ang command na ito ay nagbibigay-daan sa iyo na magnakaw ng pera mula sa ibang miyembro. Gamitin nang maingat!"
    },
    category: "Economy",
    guide: {
      en: "{p}steal <user>",
      tl: "{p}steal <user>"
    },
  },
  onStart: async function ({ event, message, threadsData, usersData, api }) {
    const args = event.body.split(" ");
    const target = args[1]; // the user you want to steal from
     
    if (!target) {
      message.reply("Please specify a user to steal from.");
      return;
    }

    // Check if the target user exists
    const targetData = await usersData.get(target);
    if (!targetData) {
      message.reply("The target user does not exist.");
      return;
    }

    // Get the current user's data
    const userData = await usersData.get(event.senderID);

    // Generate a random amount to steal between 1 and 100
    const stolenAmount = Math.floor(Math.random() * 100) + 1;

    // Deduct the stolen amount from the target user's balance
    const newTargetBalance = targetData.money - stolenAmount;
    await usersData.set(target, { money: newTargetBalance });

    // Add the stolen amount to the current user's balance
    const newBalance = userData.money + stolenAmount;
    await usersData.set(event.senderID, { money: newBalance });

    message.reply(`You stole ${stolenAmount} from ${target}. Your new balance is ${newBalance}.`);
  },
  onChat: async function ({ event, message, threadsData, usersData, api }) {
    // No specific logic needed for this command
  },
  onReply: async function ({ event, message, threadsData, usersData, api, Reply }) {
    // No specific logic needed for this command
  }
};