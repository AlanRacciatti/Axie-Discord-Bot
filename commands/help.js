module.exports = (data) => {
    const { MessageEmbed } = require('discord.js');
    const helpEmbed = new MessageEmbed()
	.setAuthor("Made by Chiin", data.logo)
	.setColor('#0099ff')
	.setTitle('Axie Infinity Discord Bot')
	.setDescription('Commands with functionalities I think would be useful, hope you like it :)')
	.addFields(
    )
	.addField('$myaxies (ronin wallet)', 'It will show the whole Axies in this Ronin Wallet', true)
	.setTimestamp()

data.msg.reply({ embeds: [helpEmbed] });
};