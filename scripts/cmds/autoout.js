const fs = require("fs-extra");
const config = require("../../config.json");

module.exports.config = {
  name: "autoout",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SOBIT TAMANG",
  description: ".",
  commandCategory: "Admin",
  usages: "[number of members]",
  cooldowns: 0
};

module.exports.onLoad = () => {
  if (!config["leave"]) config["leave"] = {};
  if (!config["leave"]["status"]) config["leave"]["status"] = false;
  if (!config["leave"]["number"]) config["leave"]["number"] = 1000;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));
};

module.exports.onStart = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  const permission = ["100049522025179"];
  if (!permission.includes(event.senderID))
    return api.sendMessage("You don't have permission to use this command. Only xue editz can do it", event.threadID, event.messageID);

  let number = parseInt(args[0]);
  if (isNaN(number)) number = config.leave.number;

  config.leave = {
    status: !config.leave.status,
    number: number
  };
  fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));

  const statusText = config.leave.status ? "enabled" : "disabled";
  return api.sendMessage(
    `Auto-leave feature has been ${statusText}. The bot will leave groups with fewer than ${config.leave.number} members.`,
    threadID,
    messageID
  );
};

module.exports.handleEvent = async ({ api, event }) => {
  const { threadID, participantIDs } = event;

  if (
    config.leave.status &&
    participantIDs.length <= config.leave.number &&
    event.isGroup &&
    event.senderID !== api.getCurrentUserID() &&
    !config.ADMINBOT.includes(event.senderID)
  ) {
    await api.sendMessage(
      `➝ XUE EDITZ 𝐖𝐚𝐫𝐧𝐢𝐧𝐠\n◆═════════════◆\n➝ This bot will leave the group because there are fewer than ${config.leave.number} members.\n➝ Currently, the number of members is ${participantIDs.length}/${config.leave.number} and the bot cannot operate properly.\n\n➝ Please add my BOSS to this group.\n➝ Facebook: https://www.facebook.com/sobittamang69 or https://www.facebook.com/xue.editz.69`,
      threadID
    );

    return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
  }
};