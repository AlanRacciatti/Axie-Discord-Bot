module.exports = (info) => {

    const axios = require('axios')

    const normalEmbed = require('../embeds/normalEmbed');
    const accountInfoEmbed = require('../embeds/accountInfoEmbed');
    
    if (typeof(info.args[0]) !== "string" || !info.args[0].startsWith("ronin:")) {
        let embedInfo = {
            title: "Error!",
            description: "Unvalid arguments, try with something like `$myaccount ronin:63983c3de9872f8671d87faa5261d5acf0eb2fc8`"
        }
        info.msg.reply({ embeds: [normalEmbed(embedInfo)] }) 
    } else {
        const walletAddress = info.args[0].replace("ronin:", "0x")
        axios.request({
            method: "GET",
            url: `https://axie-infinity.p.rapidapi.com/get-update/${walletAddress}`,
            params: {id: walletAddress},
            headers: {
            'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
            'x-rapidapi-key': 'bb687891e2msh4f4d12cc617b010p159ec2jsn620fe1d28dc1'
            }
        })
        .then(data => {
            if (data.data.leaderboard.name === undefined) {
                let embedInfo = {
                    title: "Error!",
                    description: "We couldn't find your account, try with something like `$myaccount ronin:63983c3de9872f8671d87faa5261d5acf0eb2fc8`"
                }
                info.msg.reply({ embeds: [normalEmbed(embedInfo)] })                                     
            } else {
                if (data.data.leaderboard.name === null) {
                    let embedInfo = {
                        title: "Error!",
                        description: "We couldn't find your account, try with something like `$myaccount ronin:63983c3de9872f8671d87faa5261d5acf0eb2fc8`"
                    }
                    info.msg.reply({ embeds: [normalEmbed(embedInfo)] })
                } else {
                    console.log(data.data)
                    info.msg.reply({ embeds: [accountInfoEmbed(data.data)] })
                }
            }
        })
    }
}