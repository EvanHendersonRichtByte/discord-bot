const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { resolve } = require("path");
const { prefix, token, presence } = require("./config.json");
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;
  try {
    await client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    await msg.reply("there was an error trying to execute that command!");
  }
});
client
  .login(token)
  .then(() => {
    client.user.setPresence(presence);
  })
  .catch(() => console.log(new Error("Problem while logging")));
