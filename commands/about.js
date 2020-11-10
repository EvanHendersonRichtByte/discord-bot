module.exports = {
  name: "about",
  description: "story about this bot",
  execute(message, args) {
    message.channel.send(
      `This bot is currently under development, please contact <@348358137897549825> for further updates`
    );
  },
};
