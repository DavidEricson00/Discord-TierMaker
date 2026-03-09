import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("testar")
  .setDescription("Testa se o bot está funcionando");

export async function execute(interaction) {
  await interaction.reply("Olá mundo!");
}