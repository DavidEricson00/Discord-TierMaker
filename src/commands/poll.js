import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("poll")
  .setDescription("Cria uma enquete")
  .addStringOption(option =>
    option
      .setName("titulo")
      .setDescription("Título da enquete")
      .setRequired(true)
  );

export async function execute(interaction) {
  const titulo = interaction.options.getString("titulo");

  await interaction.reply({
    poll: {
      question: {
        text: titulo
      },
      answers: [
        {
          text: "Sim",
          emoji: "👍"
        },
        {
          text: "Não",
          emoji: "👎"
        }
      ],
      duration: 24
    }
  });
}