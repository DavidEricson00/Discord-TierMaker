# Discord TierMaker

A simple Discord bot that lets you create polls directly in your server using slash commands.

## 🛠️ Technologies Used

- Node.js
- Discord.js v14
- dotenv

## 📂 Features

- Create polls with custom title and options
- Support for emojis in poll options
- Configurable poll duration (in hours)
- Up to 10 options per poll
- Native Discord poll format

## 🚀 Commands

| Command | Description |
|--------|-------------|
| `/poll` | Creates a poll with a title, options, and duration |

**Example usage:**
```
/poll titulo:Best Language? opcoes:Python 🐍 | Java ☕ | JS 🟨 duracao:24
```

## ⚙️ Setup

1. Clone the repository:
```bash
git clone https://github.com/DavidEricson00/Discord-TierMaker.git
```

2. Install dependencies:
```bash
npm install
```

3. Fill in the `.env` file with your bot credentials:
```env
DISCORD_TOKEN=your_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

4. Register the slash commands:
```bash
npm run deploy
```

5. Start the bot:
```bash
npm run start
```

## 🔑 Getting Your Credentials

- `DISCORD_TOKEN` — Found in the [Discord Developer Portal](https://discord.com/developers/applications) under your bot's settings
- `CLIENT_ID` — Your application's ID, also in the Developer Portal
- `GUILD_ID` — Right-click your server in Discord and select **Copy Server ID** (requires Developer Mode enabled)
