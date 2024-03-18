module.exports = {
  config: {
    name: "video",
    aliases: [],
    version: "1.1",
    author: "kshitiz",
    countDown: 5,
    role: 0,
    shortDescription: "get anime video",
    longDescription: "get random anime video based on category",
    category: "anime",
    guide: "{pn} category",
  },

  sentVideos: {
    naruto: [],
    bleach: [],
    onepiece: [],
    // Add more categories as needed
  },

  videos: {
    naruto: [
      "https://drive.google.com/uc?export=download&id=1OP2zmycLmFihRISVLzFwrw__LRBsF9GN",
      
      // Add more Naruto video links here
    ],
    bleach: [
      "https://drive.google.com/uc?export=download&id=1bds-i6swtqi2k4YCoglPKTV7kL7f-SF7",
    
      // Add more Bleach video links here
    ],
    onepiece: [
      "https://drive.google.com/uc?export=download&id=1QaK3EfNmbwAgpJm4czY8n8QRau9MXoaR",
      
      // Add more One Piece video links here
    ],
    // Add more categories and video links as needed
  },

  onStart: async function ({ api, event, message, args }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading random anime video... Please wait! 🕐",
    });

    if (args.length === 0) {
      api.unsendMessage(loadingMessage.messageID);
      return message.reply({
        body: `Please specify a category. Available categories: ${Object.keys(this.videos).join(", ")}`,
      });
    }

    const category = args[0].toLowerCase();

    if (!this.videos.hasOwnProperty(category)) {
      api.unsendMessage(loadingMessage.messageID);
      return message.reply({
        body: `Invalid category. Available categories: ${Object.keys(this.videos).join(", ")}`,
      });
    }

    const availableVideos = this.videos[category].filter(video => !this.sentVideos[category].includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos[category] = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos[category].push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: `Enjoy the ${category} video... 🤍`,
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};