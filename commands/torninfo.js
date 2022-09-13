// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('torninfo')
        .setDescription('Shows a list of informational commands that are useful in Torn City.'),

    async execute(interaction) {

        //Trying the code for any errors
        try {

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":card_file_box: **TORN INFORMATION** :card_file_box:")
                .addFields(

                    { name: "**Introduction**", value: ` \`\`\`\nIf you are new to Torn, or just want to better understand some things, you can check out the commands below to find out what to do as a beginner, how to make a jump, what is a chain, and more!\`\`\` ` },
                    { name: "**Torn Commands**", value: ` \`\`\`\n• /newcomer (Provides advice and steps to follow as a newcomer to Torn City)\n\n• /stacking (What does it mean to stack energy and how to do it.)\n\n• /chaining (What does it mean to chain and how to do it.)\`\`\` ` },

                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **torninfo** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}