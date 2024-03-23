const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = "lol change me when you have a token please";

const client = new Client({ intents: [GatewayIntentBits.Guilds ]});


client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
})

client.login(token);