const axios = require('axios');
const request = require('request');
const fs = require('fs');

module.exports = {
  config: {
    name: 'shoti',
    version: '1.0',
    author: 'DRG',
    countDown: 10,
    role: 0,
    longDescription: 'get videos from drg api',
    category: 'ai',
    guide: '{pn} shoti',
  },
  onStart: async function ({ api, event }) {
    try {
      api.setMessageReaction('👀', event.messageID, (err) => {}, true);
      const response = await axios.get('http://videos.kapalnai.repl.co/video/apikey=drg');
      const ext = response.data.url.substring(response.data.url.lastIndexOf('.') + 1);
     
      const callback = () => {
       api.setMessageReaction('😻', event.messageID, (err) => {}, true);
 api.sendMessage(
          {
            body: '🥵😻💋',
            attachment: fs.createReadStream(__dirname + `/cache/Video.${ext}`),
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + `/cache/Video.${ext}`),
          event.messageID
        );
      };

      request(response.data.url).pipe(fs.createWriteStream(__dirname + `/cache/Video.${ext}`)).on('close', callback);
    } catch (err) {
      api.sendMessage('error', event.threadID, event.messageID);
    }
  },
};