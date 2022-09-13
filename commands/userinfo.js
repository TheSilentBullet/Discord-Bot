// Require the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    //The setup of the command
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Shows the information about an user.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The user to get the information from.')),

    async execute(interaction) {

        //Trying the code for any errors
        try {

            //Defining the user/member that the information will be requsted from
            //Used to get the User object
            const user = interaction.options.getUser('target')

            //Used to get the guildMember object
            const member = interaction.options.getMember('target')

            //The thumbnail of the user
            if (user) {
                //to show targeted user's thumbnail
                 userThumbnail = user.avatarURL()
            } else {
                //to show the thumbnail of the user that initiated the command
                 userThumbnail = interaction.user.avatarURL()
            }

            //The tag of the user
            if (user) {
                //to show targeted user's tag
                userName = user.tag
            } else {
                //to show the tag of the user that initiated the command
                userName = interaction.user.tag
            }

            //The ID of the user
            if (user) {
                //to show targeted user's ID
                userId = user.id
            } else {
                //to show the ID of the user that initiated the command
                userId = interaction.user.id
            }

            //The nickname of the user
            if (member) {
                //to show targeted user's nickname
                nickname = member.nickname || "No Nickname"
            } else {
                //to show the nickname of the user that initiated the command
                nickname = interaction.member.nickname || "No Nickname"
            }

            //The time when the user joined the guild
            if (member) {
                //to show targeted user's guild join time
                joinDate = member.joinedAt
            } else {
                //to show the join time of the user that initiated the command
                joinDate = interaction.member.joinedAt
            }

            //The time when the user created the account
            if (user) {
                //to show targeted user's account creation date
                accountCreationDate = user.createdAt
            } else {
                //to show the account creation date of the user that initiated the command
                accountCreationDate = interaction.user.createdAt
            }

            //The embeded message
            const Embed = new EmbedBuilder()

                .setColor("#005073")
                .setTitle(":busts_in_silhouette:  **USER INFORMATION**  :busts_in_silhouette:")
                .setThumbnail(userThumbnail)
                .addFields(

                    { name: "**Username**", value: ` \`\`\`\n${userName}\`\`\` `, inline: true },
                    { name: "**User ID**", value: ` \`\`\`\n${userId}\`\`\` `, inline: true },
                    { name: "**Nickname**", value: ` \`\`\`\n${nickname}\`\`\` `},
                    { name: "**Joined this server at:**", value: ` \`\`\`\n${joinDate}\`\`\` ` },
                    { name: "**Account created at:**", value: ` \`\`\`\n${accountCreationDate}\`\`\` ` }
                )

            await interaction.reply({ embeds: [Embed] });

            //Catching the error message and letting the user know that something happened
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: `:sos: :sos: I'm dying... Please, tell **TheSilentBullet#5368** that something very bad happened with **userinfo** and he needs to fix it, before it's too late! :sos: :sos:`, ephemeral: true });
        }

    }
       
}