module.exports = {
    config: {
        name: "Ok",
        version: "1.0",
        author: "Jaychris Garcia",
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
    if (event.body && event.body.toLowerCase() == "ok") return message.reply("machikney chup lag feri ok na van 🥸💋");
}
};