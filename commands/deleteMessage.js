module.exports = {
  name: "delete message",
  description: "just like its name",
  execute(message) {
    message.delete({ timeout: "2000", reason: "It had to be done." });
    console.log('deleted!')
  },
};
