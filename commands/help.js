module.exports = (data) => {
    const { MessageEmbed } = require('discord.js');
    const helpEmbed = new MessageEmbed()
	.setAuthor("Made by Chiin", data.logo)
	.setColor('#0099ff')
	.setTitle('Axie Infinity Discord Bot')
	.setDescription('Commands with functionalities I think would be useful, hope you like it :)')
	.addField('$myaxies {ronin wallet}', 'It will show the whole Axies in this Ronin Account', true)
	.addField('$myaccount {ronin wallet}', 'It will show info and stats of this Ronin Account', true)
	.setTimestamp()

data.msg.reply({ embeds: [helpEmbed] });
};