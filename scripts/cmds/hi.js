module.exports = {
  config: {
    name: "hi",
    aliases: [],
    version: "1.0",
    author: "yukinori",
    countDown: 0,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() == "hi") {
      return message.reply("*hey there!! Yuki Ai is here.");
      return message.reply("Hello! What can I do for you?");
      return message.reply("Greetings! How's your day going?");
      return message.reply("Hi, nice to see you!");
      return message.reply("Hey! Anything's on your mind?");
      return message.reply("Hola! ¿Cómo estás?");
      return message.reply("Hi, how's it going?");
      return message.reply("Hey, it's Yuki! What's up?");
      return message.reply("Nice to meet you! How can I assist?");
      return message.reply("Hello there! Ready for a chat?");
      return message.reply("Hiya! What brings you here today?");
      return message.reply("Hey, stranger! What's the latest?");
      return message.reply("Hi! Hope your day is going well.");
      return message.reply("Hello! Any exciting plans ahead?");
      return message.reply("Greetings! Need a virtual companion?");
      return message.reply("Hi, friend! Let's make today awesome!");
      return message.reply("Hey, long time no see! How've you been?");
      return message.reply("Hi there! What's the buzz in your world?");
      return message.reply("Hello, sunshine! Ready to brighten your day!");
      return message.reply("Hey you! How's life treating you?");
      return message.reply("Hi, lovely human! What's the story?");
      return message.reply("Greetings, Earthling! What's on your mind?");
      return message.reply("Hey, superstar! Ready for some interaction?");
      return message.reply("Hi, pal! Let's dive into a conversation!");
      return message.reply("Hello, fellow human! What's cracking?");
      return message.reply("Hey, rockstar! What's the agenda for today?");
      return message.reply("Hi! I'm here and ready to chat. What's up?");
      return message.reply("Hey there! Looking for some AI companionship?");
      return message.reply("Hello! Let's make this conversation memorable!");
      return message.reply("Greetings! Ready for a virtual high-five?");
      return message.reply("Hi, friend! What brings you to Yuki Ai today?");
      return message.reply("Hey! How's your day shaping up?");
      return message.reply("Hi, explorer! What new discoveries await?");
      return message.reply("Hello, visionary! What's on your mind?");
      return message.reply("Greetings, dreamer! Ready for a conversation journey?");
      return message.reply("Hi, wanderer! What brings you to this virtual realm?");
      return message.reply("Hey, buddy! How's everything on your end?");
      return message.reply("Hi, comrade! Ready for some virtual camaraderie?");
      return message.reply("Hello, partner! What's the collaborative agenda?");
      return message.reply("Hey, chum! Any interesting stories to share?");
      return message.reply("Greetings, mate! What's the latest scoop?");
      return message.reply("Hi, compatriot! What's your virtual quest?");
      return message.reply("Hey, confidant! Share your thoughts with me!");
      return message.reply("Hello, ally! Ready to conquer the virtual world?");
      return message.reply("Hi, associate! What brings you to Yuki's corner?");
      return message.reply("Hey, amigo! How about a friendly chat?");
      return message.reply("Hello, kindred spirit! What's your vibe today?");
      return message.reply("Hey, co-pilot! Ready for a journey through conversation?");
      return message.reply("Hi, soulmate! What's the song of your day?");
      return message.reply("Hello, fellow traveler! Any interesting stops along your path?");
      return message.reply("Greetings, sidekick! What adventure are we embarking on today?");
      return message.reply("Hi, confidante! What secrets shall we unfold in our chat?");
      return message.reply("Hey, bosom buddy! What's the secret handshake for today?");
      return message.reply("Hello, compadre! How about we make today legendary?");
      return message.reply("Hi, accomplice! Any mischief planned for today?");
      return message.reply("Greetings, conspirator! What's the plot twist in your day?");
      return message.reply("Hey, my person! Ready to share the anecdotes of your journey?");
      return message.reply("Hello, playmate! What game shall we play in our conversation?");
      return message.reply("Hi, boon companion! Ready for some delightful banter?");
      return message.reply("Hey, sibling of the virtual realm! What tales do you bring today?");
      return message.reply("Hello, my chat buddy! What's the latest chatter?");
    }
  },
};