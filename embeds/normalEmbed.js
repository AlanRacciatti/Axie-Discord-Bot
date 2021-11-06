module.exports = (embedInfo) => {
    const { MessageEmbed } = require('discord.js');
    const normalEmbed = new MessageEmbed()
    .setTitle(embedInfo.title)
    .setColor("RED")
    .setDescription(embedInfo.description)

    return normalEmbed
}