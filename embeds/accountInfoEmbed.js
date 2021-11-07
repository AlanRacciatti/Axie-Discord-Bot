module.exports = (embedInfo) => {
    const { MessageEmbed } = require('discord.js');
    const date = new Date(embedInfo.slp.lastClaimedItemAt * 1000).toDateString()
    return new MessageEmbed()
    .setTitle(embedInfo.leaderboard.name)
    .setDescription(`Here are the stats of ${embedInfo.leaderboard.name}!`)
    .setColor("GOLD")
    .addFields(
        { name: "Total SLP", value: embedInfo.slp.total.toString(), inline: true},
        { name: "Yesterday SLP", value: embedInfo.slp.yesterdaySLP.toString(), inline: true},
        { name: "Average SLP", value: embedInfo.slp.average.toString(), inline: true},
        { name: "MMR", value: embedInfo.leaderboard.elo.toString(), inline: true},
        { name: "Rank", value: embedInfo.leaderboard.rank.toString(), inline: true},
        { name: "Last claim", value: date, inline: true},
    )
}