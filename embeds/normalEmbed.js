module.exports = (embedInfo) => {
    const { MessageEmbed } = require('discord.js');
    let color = ""
    if (embedInfo.color === undefined) {
        color = "RED"
    } else {
        color = embedInfo.color
    }
    const normalEmbed = new MessageEmbed()
    .setTitle(embedInfo.title)
    .setColor(color)
    .setDescription(embedInfo.description)

    return normalEmbed
}