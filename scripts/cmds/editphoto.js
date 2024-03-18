module.exports = {
  config: {
    name: "editphoto",
    aliases: ["ep"],
    version: "1.0",
    author: "Sobit Tamang",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Edit a photo and add text inside it"
    },
    longDescription: {
      en: "Edit a photo and add text inside it by replying to the image"
    },
    category: "media",
    guide: {
      en: "{p}editphoto <text>"
    }
  },

  onStart: async function ({ event, message, args, api }) {
    const attachment = event.attachments[0];

    if (!attachment) {
      message.reply({ body: "Please reply to an image to use this command." });
      return;
    }

    const text = args.join(" ");
    if (!text) {
      message.reply({ body: "Please provide the text to add inside the image." });
      return;
    }

    // Download the image
    const response = await api.downloadFile(attachment.url);
    const imageBuffer = await response.buffer();

    // Edit the image
    const editedImage = await addTextToImage(imageBuffer, text);

    // Send the edited image as a reply
    message.reply(
      { attachment: editedImage, name: "edited_image.jpg" },
      (err, info) => {
        if (err) {
          console.error("Failed to send the edited image:", err);
          return;
        }
        console.log("Sent the edited image with message ID:", info.messageID);
      }
    );
  }
}

async function addTextToImage(imageBuffer, text) {
  // Add your custom logic here to edit the image and add the text
  // This is just a placeholder code that adds the text to the top left corner of the image using the "canvas" library
  
  const { createCanvas, loadImage } = require("canvas");

  const image = await loadImage(imageBuffer);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  
  // Draw the original image onto the canvas
  ctx.drawImage(image, 0, 0);

  // Add the text to the top left corner of the image
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(text, 10, 30);

  // Convert the canvas to a buffer
  const editedImageBuffer = canvas.toBuffer("image/jpeg");

  return editedImageBuffer;
}