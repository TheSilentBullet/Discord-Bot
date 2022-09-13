// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows the uptime and the latency for the client.'),
        
    async execute(interaction) {
        
        //Trying the code for any errors
        try {

            //Calculating the uptime
            let days = Math.floor(interaction.client.uptime / 86400000);
            let hours = Math.floor(interaction.client.uptime / 3600000) % 24;
            let minutes = Math.floor(interaction.client.uptime / 60000) % 60;
            let seconds = Math.floor(interaction.client.uptime / 1000) % 60;

            let ping = interaction.client.ws.ping
            
            //The embeded message
                const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":ping_pong: **PONG** :ping_pong:")
                .addFields(

                    { name: ":stopwatch: **Ymir's uptime:**", value: ` \`\`\`\n            ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds           \`\`\` `},
                    { name: ":sparkling_heart: **Ymir's heartbeat:**", value: ` \`\`\`\n                          ${ping} MS              \`\`\` `}

                )

            await interaction.reply({ embeds: [Embed] });

        //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **ping** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}