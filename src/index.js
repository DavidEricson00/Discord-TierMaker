import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import * as poll from "./commands/poll.js";
import http from "http";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = {
  poll
};

client.once("clientReady", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands[interaction.commandName];

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "Erro ao executar comando.",
      ephemeral: true
    });
  }
});

client.login(process.env.DISCORD_TOKEN);

// Minimum server for Render, remove if you want
http.createServer((req, res) => {
  res.end("Bot rodando");
}).listen(process.env.PORT || 3000);