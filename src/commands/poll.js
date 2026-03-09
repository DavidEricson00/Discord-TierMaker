import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("poll")
  .setDescription("Cria uma enquete")
  .addStringOption(option =>
    option
      .setName("titulo")
      .setDescription("Título da enquete")
      .setRequired(true)
  )
  .addStringOption(option =>
    option
      .setName("opcoes")
      .setDescription("Opções separadas por | (ex: Python 🐍 | Java ☕ | JS 🟨)")
      .setRequired(true)
  )
  .addIntegerOption(option =>
    option
      .setName("duracao")
      .setDescription("Duração da enquete em horas")
      .setRequired(true)
  );

function parseOptions(optionsString) {
  const options = optionsString
    .split("|")
    .map(opt => opt.trim())
    .filter(Boolean);

  const answers = options.map(option => {
    const parts = option.split(" ");

    if (parts.length === 1) {
      return { text: parts[0] };
    }

    const emoji = parts.pop();
    const text = parts.join(" ");

    return {
      text,
      emoji
    };
  });

  return answers;
}

export async function execute(interaction) {
  const titulo = interaction.options.getString("titulo");
  const opcoes = interaction.options.getString("opcoes");
  const duracao = interaction.options.getInteger("duracao");

  const answers = parseOptions(opcoes);

  if (answers.length < 2) {
    return interaction.reply({
      content: "Você precisa fornecer pelo menos 2 opções.",
      ephemeral: true
    });
  }

  if (answers.length > 10) {
    return interaction.reply({
      content: "Máximo de 10 opções.",
      ephemeral: true
    });
  }

  await interaction.reply({
    poll: {
      question: {
        text: titulo
      },
      answers,
      duration: duracao
    }
  });
}