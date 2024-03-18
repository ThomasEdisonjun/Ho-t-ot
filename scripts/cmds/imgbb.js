const axios = require('axios');
const FormData = require('form-data');

module.exports = {
  config: {
    name: "imgbb",
    aliases: ["i"],
    version: "1.0",
    author: "Xemon",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Upload an image to imgbb"
    },
    longDescription: {
      en: "This command allows you to upload an image to imgbb."
    },
    category: "tools",
    guide: {
      en: ""
    }
  },

  onStart: async function ({ api, event }) {
    const imgbbApiKey = "815ee7dd0d35be59c8fc284eeef199cf"; // Replace "YOUR_API_KEY_HERE" with your actual API key
    const linkanh = event.messageReply?.attachments[0]?.url;
    if (!linkanh) {
      return api.sendMessage('Please reply to an image.', event.threadID, event.messageID);
    }

    try {
      const response = await axios.get(linkanh, { responseType: 'arraybuffer' });
      const formData = new FormData();
      formData.append('image', Buffer.from(response.data, 'binary'), { filename: 'image.png' });
      const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: formData.getHeaders(),
        params: {
          key: imgbbApiKey
        }
      });
      const imageLink = res.data.data.url;
      return api.sendMessage(imageLink, event.threadID, event.messageID);
    } catch (error) {
      console.log(error);
      return api.sendMessage('Failed to upload image to imgbb.', event.threadID, event.messageID);
    }
  }
};