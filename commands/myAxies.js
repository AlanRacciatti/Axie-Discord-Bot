const axios = require("axios");

module.exports = (info) => {

    const normalEmbed = require('../embeds/normalEmbed');
    const axieInfoEmbed = require('../embeds/axieInfoEmbed');
    
    if (typeof(info.args[0]) !== "string" || !info.args[0].startsWith("ronin:")) {
        let embedInfo = {
            title: "Error!",
            description: "Unvalid arguments, try with something like `-myaxies ronin:63983c3de9872f8671d87faa5261d5acf0eb2fc8`"
        }
        info.msg.reply({ embeds: [normalEmbed(embedInfo)] }) 
    } else {
        const walletAddress = info.args[0].replace("ronin:", "0x");
        axios.request({
            method: "GET",
            url: `https://axie-infinity.p.rapidapi.com/get-axies/${walletAddress}`,
            headers: {
                'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
                'x-rapidapi-key': 'bb687891e2msh4f4d12cc617b010p159ec2jsn620fe1d28dc1'
            }
        })
        .then(data => {
            const {axies} = data.data.data
            const axiesId = axies.results.map(axie => " " + axie.id + " ")

            if (typeof(axiesId[0]) !== "string") {
                let embedInfo = {
                    title: "Error",
                    description: "There was an error searching your axies"
                }
                info.msg.reply({embeds: [normalEmbed(embedInfo)]})
            } else {
                let axiesEmbeds = axies.results.map(axie => axieInfoEmbed(axie))
                info.msg.reply({embeds: axiesEmbeds})
            }
            
        })
    } 
}