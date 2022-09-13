// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('newcomer')
        .setDescription('Provides advice and steps to follow as a newcomer to Torn City'),

    async execute(interaction) {

        //Trying the code for any errors
        try {

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":hatching_chick: **FIRST STEPS** :hatching_chick:")
                .addFields(

                    { name: "**Energy**", value: ` \`\`\`\n• Start by using all your energy. Your first goal is to get all your stats to 250 each.\n\n• After you get your battle stats to 250 each, focus on reaching level 15 as this unlocks the ability to travel.\n\n• Once you reach level 15, use all your energy exclusively to train (and chaining when required).\`\`\` ` },
                    { name: "**Job**", value: ` \`\`\`\n• Get a job in the Army, Casino, or Grocery store until you attain 100 in any work stat.\n\n• Afterwards pursue player owned companies (ask your faction members as there might be some companies available owned by faction members and they might have an empty spot for you).\`\`\` ` },
                    { name: "**Education**", value: ` \`\`\`\n• Complete Introduction to Biochemistry and Intravenous Therapy. This allows you to fill and use blood bags.\n\n• After that, complete the Sport Science courses, as they let you gain more stats when training.\`\`\` ` },
                    { name: "**Crimes**", value: ` \`\`\`\n• Don\'t expect a dynamic feature here. It takes lots of grinding before you can move on.\n\n• Do around 30 \'Search for cash\' crimes. After that, do around 150 \'Sell copied media\' crimes.\n\n• Once you\'ve completed those, move onto Shoplift and do Clothes Shop Thefts > Steal Jackets as this is the most safe crime to do until you get to 30 Natural Nerve Bar (NNB).\`\`\` ` },
                    { name: "**Money**", value: ` \`\`\`\n• Buy plushies, beers or lollipops at the city\'s shops and sell them to other players.\n\n• A recommendation would be to sell your stuff to your faction trader (if your faction has one), since other players might want to mug you after you sell them stuff.\n\n• After level 15, travel to buy items abroad and sell them to other players for profit.\`\`\` ` },
                    { name: "**Others**", value: ` \`\`\`\n• Do missions and write down the targets to start making a chaining list.\n\n• Your priorities when you have enough money are:\n ◇ renting a Private Island with an airstrip\n ◇ get married and split Private Island costs\`\`\` ` }

                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **newcomer** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}