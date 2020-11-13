module.exports = {
  name: "avatar",
  description: "For viewing author/sender's avatar",
  execute(message) {
    message.reply(message.author.displayAvatarURL());
  },
};
