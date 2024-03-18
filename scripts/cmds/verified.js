const axios = require("axios");
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
  config: {
    name: "verified",
    version: "1.0",
    author: "Sobit",
    countDown: 5,
    role: 0,
    shortDescription: "verified image edit",
    longDescription: "verified image edit",
    category: "fun",
    guide: {
      en: "{p}{n} verified or with tag",
    }
  },

  onStart: async function ({ api, event, args, Users, message }) {
    var id = Object.keys(event.mentions)[0] || event.senderID;
    var id1 = Object.keys(event.mentions)[1] || event.senderID;
    const img = `https://milanbhandari.xemonz.repl.co/verified?uid=${id}`;
    const form = {
      body: `HAHAHAHA...`
    };
    form.attachment = [];
    form.attachment[0] = await global.utils.getStreamFromURL(img);
    message.reply(form);
  }
};