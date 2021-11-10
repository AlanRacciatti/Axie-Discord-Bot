const axios = require('axios');

module.exports = info => {

    const coinsEmbed = require('../embeds/coinsEmbed')

    axios.get(`https://api.coingecko.com/api/v3/coins/smooth-love-potion`)
    .then(data => {
    
        let infoSLP = {
        symbol: data.data.symbol.toUpperCase(),
        image: data.data.image.thumb,
        current_price: data.data.market_data.current_price.usd,
        high_24h: data.data.market_data.high_24h.usd,
        low_24h: data.data.market_data.low_24h.usd,
        price_change_24h: data.data.market_data.price_change_percentage_24h
        }

        info.msg.reply({ embeds: [coinsEmbed(infoSLP)] })

        axios.get(`https://api.coingecko.com/api/v3/coins/axie-infinity`)
        .then(data => {

            let infoAXS = {
                symbol: data.data.symbol.toUpperCase(),
                image: data.data.image.thumb,
                current_price: data.data.market_data.current_price.usd,
                high_24h: data.data.market_data.high_24h.usd,
                low_24h: data.data.market_data.low_24h.usd,
                price_change_24h: data.data.market_data.price_change_percentage_24h
            }

            info.msg.reply({ embeds: [coinsEmbed(infoAXS)] })

        })
    
    
    })

} 

