module.exports = (embedInfo) => {
    const { MessageEmbed } = require('discord.js');
    return new MessageEmbed()
    .setTitle(embedInfo.symbol)
    .setThumbnail(embedInfo.image)
    .setDescription(`Here you have info of ${embedInfo.symbol}`)
    .setColor("GREEN")
    .addFields(
        { name: "Current price", value: embedInfo.current_price.toString()},
        { name: "Price change in 24h", value: `${embedInfo.price_change_24h.toFixed(2).toString()}%`},
        { name: "High 24H", value: embedInfo.high_24h.toString()},
        { name: "Low 24H", value: embedInfo.low_24h.toString()},
    )
}