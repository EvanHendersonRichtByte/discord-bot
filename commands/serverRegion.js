module.exports = {
    name:"sr",
    description: "Display guild created date",
    execute(message) {
        message.channel.send(`This server's region is ${message.guild.region}`)
    }
}