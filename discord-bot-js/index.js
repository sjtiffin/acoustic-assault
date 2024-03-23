const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = "lol change me when you have a token please";

const client = new Client({ intents: [GatewayIntentBits.Guilds ]});


client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
})

client.login(token);

// See https://discordjs.guide/creating-your-bot/main-file.html#running-your-application
// for more information and guidance on how to expand the basics of this bot.  Right now,
// it will only be able to log in to discord (once it has been registered and given a token).