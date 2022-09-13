// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Shows the information about the discord server.'),
        
    async execute(interaction) {

        //Trying the code for any errors
        try {

        //The thumbnail of the server
        let serverThumbnail = interaction.guild.iconURL({ dynamic: true })

        //The name of the server
        let serverName = interaction.guild.name

        //The name of the server owner
        let serverOwner = await interaction.guild.fetchOwner()

        //The number of all members in the guild
        let allMembers = interaction.guild.memberCount

        //Fetching the members of the guild to cache them
        await interaction.guild.members.fetch()
        
        //The number of members in the guild
        let members = interaction.guild.members.cache.filter(member => !member.user.bot).size
        
        //The number of bots in the guild
        let bots = interaction.guild.members.cache.filter(member => member.user.bot).size
        
        //The id of the guild
        let guildId = interaction.guild.id

        //The language of the guild
        let guildLanguage = interaction.guild.preferredLocale

        //The time the guild was created
        let creationDate = interaction.guild.createdAt

        //The embeded message
            const Embed = new EmbedBuilder()

            .setColor("#005073")
            .setTitle(":desktop_computer:  **SERVER INFORMATION**  :desktop_computer:")
            .setThumbnail(serverThumbnail)
            .addFields(

                { name: "**Server Name**", value:` \`\`\`\n${serverName}\`\`\` `, inline: true },
                { name: "**Server Owner**", value:` \`\`\`\n${serverOwner.user.tag}\`\`\` `, inline: true },
                { name: `**Member Count**`, value:` \`\`\`\nTotal Members:${allMembers}  |  Members:${members}  |  Bots:${bots}\`\`\` `},
                { name: `**Server ID**`, value: ` \`\`\`\n${guildId}\`\`\` `, inline: true },
                { name: `**Server Language**`, value:` \`\`\`\n${guildLanguage}\`\`\` `, inline: true },
                { name: `**Server creation date**`, value: ` \`\`\`\n${creationDate}\`\`\` `}
                
            )

        await interaction.reply({ embeds: [Embed] });

        //Catching the error message and letting the user know that something happened
    } catch(error) {
        console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **serverinfo** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
    }
        
    }

}