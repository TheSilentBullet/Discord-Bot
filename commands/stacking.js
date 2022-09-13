// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
 
    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('stacking')
        .setDescription('What does it mean to stack energy and how to do it.'),

    async execute(interaction) {

        //Trying the code for any errors
        try { 

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":books: **STACKING** :books:")
                .addFields(

                    { name: "**What is it for**", value: ` \`\`\`\n• Stacking allows you to get your energy as high as 1000 (max possible energy). As you already probably know, energy is useful for training and attacking. So stacking will allow you to, among other things, get 40 right upfront during a chain or perform a happy jump.\`\`\` ` },
                    { name: "**How to do it**", value: ` \`\`\`\n• Step 1:\nYou\'re going to want to get your energy down to 0, before you take that first Xanax. This way you aren\'t wasting any energy. \n\n• Step 2:\nYou now take that 1st Xanax (you\'ll end up taking 4). This will give you 250 energy and approximately 7 hours drug cooldown per Xanax taken. You can\'t take anymore drugs during this time. Once you start taking Xanax, dont use your energy for anything else. No mugging, no attacking, no training. You are going to save this energy for the upcoming chain. Whilst you are waiting for your drug cooldown to wear off, you can fly, go racing, gamble, or even do things... Outside of Torn! \n\n• Step 3:\nOnce that cooldown is ended, you are going to repeat the process, gaining 250e each time you take a Xanax. Again, NO WASTING ENERGY ONCE YOU START STACKING. Once you have taken 4 Xanax you will be at 1000 energy, and ready for the chain or war.\`\`\` ` },
                    { name: "**Addiction**", value: ` \`\`\`\n• As you are taking Xanax you will gain drug addiction (happens with any drug you take). This doesn\'t have negative effects until you get significant levels of addiction. This can lead to your productivity in a job dropping, or even being kicked off an education course. In that downtime, if you can, you may want to fly to Switzerland and check into rehabilitation($250.000 for each session).\`\`\` ` },
                    { name: "**Overdosing**", value: ` \`\`\`\n• If you overdose, you should let someone from your faction leadership know about it (a screenshot is recommended). There is nothing to worry about, it's not great to overdose, but it is part of Torn. When you overdose, you are going to lose all the energy, happy and life you have.\`\`\` ` }
                    
                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **stacking** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}