module.exports = {
  name: "avatar",
  description: "For viewing author/sender's avatar",
  execute(message) {
    message.channel.send(
      message.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
    );
  },
};
