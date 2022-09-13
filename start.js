// Require the necessary classes
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { clientId, token } = require('./config.json');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

//Declaring the "commands" variable
const commands = [];
client.commands = new Collection();

//Filtering the commands to only get the files ending in .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

//Command fetching
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    
        console.log('');
        console.log('❖ Loading the commands...❖');
        console.log('');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );
    
        console.log('❖ Commands succesfully loaded.❖');
        console.log('');
   
})();

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log('❖-----------------------------------------❖');
    console.log('             Succesful startup!             ');
    console.log('❖-----------------------------------------❖');
});

//Error message when executing a command
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

        await command.execute(interaction);

});


// Login to Discord with your client's token
client.login(token);