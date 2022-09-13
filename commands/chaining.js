// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
 
    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('chaining')
        .setDescription('What does it mean to chain and how to do it.'),

    async execute(interaction) {

        //Trying the code for any errors
        try { 

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":chains: **CHAINING** :chains:")
                .addFields(

                    { name: "**What is it for**", value: ` \`\`\`\n• Chaining is a faction activity that allows you to gain respect for your Faction. Respect is used to enhance the benefits provided by the faction to its members. Therefore, it\'s very important for all the members to participate.\`\`\` ` },
                    { name: "**How to do it**", value: ` \`\`\`\n• Each successful hit/attack will add 1 to the chain counter found on your Torn profile. The higher the chain, the better the respect earned.\n\n• Leaving, mugging or hospitalizing a target are considered successful attacks, however leaving and hospitalizing will earn you the most respect.\n\n• Hits must be done within 5 min after each other. If no hit is made during this time, the chain will break and enter cooldown.\n\n• Hits made during cooldown are not counted as part of the chain.\`\`\` ` },
                    { name: "**Stacking**", value: ` \`\`\`\n• You will want to stack your energy before starting a chain. This means to have 1000 total energy and 0 drug cooldown. This way you can maximize your attacks count being able to make a total of 40 attacks at the start of the chain.\n\n• Type \`/stacking\` for more details on how to stack energy.\`\`\` ` },
                    { name: "**Bonus Hits**", value: ` \`\`\`\n• Hits number 10, 25, 50, 100, 250, 500, 100, 2500, 5000, 10000, 25000, 50000 and 100000 are considered bonus hits and add an increased respect gain at the same time it takes away an increased amount of respect of the target\'s faction. Bonus hits can earn you some merits, so they are usually called for in advance. Be careful when the chain counter is near one of these numbers.\n\n• If you want to claim a bonus hit, it's best to let other faction members you want the bonus hit. Also be careful who your target is for a bonus hit, since a hit on an active faction might end in an unwanted war.\`\`\` ` },
                    { name: "**Respect**", value: ` \`\`\`\n• The respect earned is calculated through modifiers.\n\n• In order to maximize your respect gains consider the following:\n ◇ look for high level targets\n ◇ leave or hospitalize\n ◇ look for retaliation hits (defeat a target that hit somebody in your faction during the last 5 min)\n ◇ group attacks\n ◇ targets that belong to a faction that is in war with you\n ◇ fair fights (targets with battle stats similar to yours [risky])\n ◇ overseas attacking (attacks done while being abroad [not recommended])\`\`\` ` },
                    { name: "**Additional help**", value: ` \`\`\`\n• A successful hit can be made on anyone, regardless of level, battle stats or activity. The main objective is keep the chain alive and making as many hits as possible.\`\`\` ` }
                    
                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **stacking** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }

}