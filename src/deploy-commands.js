import "dotenv/config";
import { REST, Routes } from "discord.js";
import * as testar from "./commands/testar.js";
import * as poll from "./commands/poll.js";

const commands = [
    testar.data.toJSON(),
    poll.data.toJSON()
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
    console.log("Registrando comandos...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Comando registrado.");
  } catch (error) {
    console.error(error);
}
