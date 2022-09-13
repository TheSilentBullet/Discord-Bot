// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
 
    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('happyjump')
        .setDescription('What is a happy jump and how can you do one.'),

    async execute(interaction) {

        //Trying the code for any errors
        try { 

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":arrow_up: :grinning: **HAPPY JUMP** :grinning: :arrow_up:")
                .addFields(

                    { name: "**What is it for**", value: ` \`\`\`\n• At low stats, happiness is more efective. Happy jumps capitalize on that fact and tries to get the most of it. With a happy jump you will be getting a huge boost to your stats.\`\`\` ` },
                    { name: "**Requirements**", value: ` \`\`\`\n• x4 Xanax\n• x5 Erotic DVD\n• 1 Ecstasy\n• Have a PI (Private Island)\n\n• Optional:\n ◇ 25 points\n ◇ Donor Status\`\`\` ` },
                    { name: "**How to do it**", value: ` \`\`\`\n• Stack on xanax to get your energy to 1000 (for more information on this, type /stacking)\n• After taking the last xanax wait for the drug cooldown to finish.\n• Make sure the time (TCT) is right after the 15 minute mark (:00, :15, :30, :45) as your happiness regenerates every 15 minutes.\n• Once happiness reset is over, take 5 EDVDs.\n• Right after taking all the EDVDs take the ecstasy to double your happiness.\n• Train all your energy\n\n• Optional:\n ◇ Refill your energy with points then train again.\`\`\` ` },
                    { name: "**Additional considerations**", value: ` \`\`\`\n• The general rule would be you can happy jump up to 400k each stat (or 800k if you work in a 10★ Adults Novelties store since your Erotic DVD gains are doubled while there).\n• You have to be quick while doing a happy jump to make sure you don\'t lose your happiness as it regenerates.\n• Before doing a happy jump make sure you have no booster or drug cooldowns.\`\`\` ` },
                    
                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **happyjump** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}