module.exports = {
  config: {
    name: 'bot',
    version: '1.0',
    author:  '©Xue Editz',
    shortDescription: '',
    category: 'fun',
    guide: '{pn}',
  },
  onStart: async function ({ message }) {
    return message.reply('van k vayo muji?');
  }
};