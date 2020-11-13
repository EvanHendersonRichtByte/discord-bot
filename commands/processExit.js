module.exports = {
  name: "restart",
  description: "Restart process",
  execute(message, args) {
    message.channel.send("Restarting...");
    process.exit();
  },
};
