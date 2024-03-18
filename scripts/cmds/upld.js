module.exports = {
  config: {
    name: "upld",
    aliases: [],
    version: "1.0",
    author: "Xue Editz",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Upload images/videos to Imgur",
    },
    longDescription: {
      en: "Upload images/videos to Imgur",
    },
    category: "media",
    guide: {
      en: "{p}imgur <image/video attachment>",
    },
  },

  async onStart({ event, message, event, args, threadsData, usersData, api, commandName, role }) {
    // Check if the message has attachments
    if (!event.attachments || !event.attachments.length) {
      message.reply("Please attach an image or video to upload to Imgur.");
      return;
    }

    // Get the API key, you should store this securely instead of hardcoding it in the code
    const apiKey = "815ee7dd0d35be59c8fc284eeef199cf";

    // Loop through each attachment and upload it to Imgur
    for (const attachment of event.attachments) {
      // Check if the attachment is an image or video
      if (attachment.type === "photo" || attachment.type === "video") {
        // Create the form data to be sent in the request
        const formData = {
          key: apiKey,
          image: attachment.url,
        };

        // Make the API request to Imgur
        const response = await api.post("https://api.imgbb.com/1/upload", formData);

        // Check if the upload was successful
        if (response && response.data && response.data.url) {
          // Reply with the uploaded image/video URL
          message.reply(`Uploaded to Imgur: ${response.data.url}`);
        } else {
          message.reply("Failed to upload to Imgur.");
        }
      } else {
        message.reply("Invalid attachment format. Only images and videos are supported.");
      }
    }
  },
};