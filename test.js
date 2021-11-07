console.clear()

const axios = require('axios');
const app = require('express')()
app.listen(3000, () => console.log("Server"))
app.get('/', (req, res) => {
    axios.get("https://api.coingecko.com/api/v3/coins/smooth-love-potion")
    .then(data => {
        console.log(data.data.image.thumb)
        console.log(data.data.market_data.current_price.usd)
        console.log(data.data.market_data.high_24h.usd)
        console.log(data.data.market_data.low_24h.usd)
        console.log(data.data.market_data.price_change_percentage_24h)
        res.json( data.data)
    })
})
