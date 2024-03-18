module.exports = {
    config: {
        name: "hehe",
        version: "1.0",
        author: "XUE EDITZ",
        countDown: 5,
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
        const lang = getLang();
        if (event.body && event.body.toLowerCase() == "hehe") {
            if (lang === "en") {
                return message.reply("Hi there! How can I assist you today?");
            } else if (lang === "fr") {
                return message.reply("Bonjour! Comment puis-je vous aider aujourd'hui?");
            } else if (lang === "es") {
                return message.reply("¡Hola! ¿En qué puedo ayudarte hoy?");
            } else if (lang === "pt") {
                return message.reply("Olá! Como posso ajudá-lo hoje?");
            } else if (lang === "tr") {
                return message.reply("Merhaba! Bugün size nasıl yardımcı olabilirim?");
            } else if (lang === "de") {
                return message.reply("Hallo! Wie kann ich Ihnen heute helfen?");
            } else if (lang === "nl") {
                return message.reply("Hallo! Hoe kan ik u vandaag helpen?");
            } else if (lang === "ru") {
                return message.reply("Здравствуйте! Чем я могу вам помочь сегодня?");
            }
        }
    }
};