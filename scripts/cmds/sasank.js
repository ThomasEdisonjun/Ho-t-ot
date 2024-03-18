module.exports = {
    config: {
        name: "Sasank",
        version: "1.0",
        author: "Sobit",
        countDown: 1,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "sasank") return message.reply("Suicide is not solution Sasank😔");
}
};