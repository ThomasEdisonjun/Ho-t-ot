const fs = require('fs');
module.exports = {
  config: {
    name: "omg",
    version: "1.0",
    author: "otinxsandip",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "omg") {
      return message.reply({
        body: "omggggg",
        attachment: await global.utils.getStreamFromURL(`https://cdn.fbsbx.com/v/t59.3654-21/368852894_1097137775054362_7009608103753380231_n.m4a/vdtoau.m4a?_nc_cat=101&ccb=1-7&_nc_sid=7272a8&_nc_ohc=8_OZ1_3EjTQAX_jhL49&_nc_ht=cdn.fbsbx.com&oh=03_AdT2otcMy09hNkZMtUIWgLjZNCR6SZjCv2XphpviISf0gQ&oe=64EA5A27&dl=1`),
      });
    }
  }
};