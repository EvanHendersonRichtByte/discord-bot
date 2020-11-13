const ytdl = require("ytdl-core");

module.exports = {
  name: "execute",
  description: "Execute order 66",
  execute(message, args) {
    message.member.voice.channel.join().then((connection) => {
      const stream = ytdl("https://www.youtube.com/watch?v=-bzWSJG93P8", { filter: "audioonly" });
      const dispatcher = connection.play(stream);

      dispatcher.on("finish", () => voiceChannel.leave());
    });
  },
};
