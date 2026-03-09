import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import * as testar from "./commands/testar.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = {
  testar
};

client.once("clientReady", () => {
  console.log(`Bot online como ${client.user.tag}`);
})

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