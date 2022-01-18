module.exports = async (info) => {

    const db = require('../database/models')
    const normalEmbed = require('../embeds/normalEmbed')

    if (info.args.length !== 2) {
        let embedInfo = {
            title: "Error!",
            description: "You have to send 2 parameters: your name and your wallet, try something like this: `-savewallet Chiin ronin:63983c3de9872f8671d87faa5261d5acf0eb2fc8`"
        }
        await info.msg.reply({embeds: [normalEmbed(embedInfo)]})
    } else {
        let [name, wallet] = info.args
        name = name.toLowerCase()

        let embedInfo = {
            title: "Running command",
            description: "Running the command -mywallet",
            color: "ORANGE"
        }

        info.msg.reply({ embeds: [normalEmbed(embedInfo)] })

        if (!wallet.startsWith("ronin:")) {
            let embedInfo = {
                title: "Error!",
                description: "Your wallet should start with `ronin:`"
            }
            info.msg.reply({embeds: [normalEmbed(embedInfo)]})
        }


        db.User.findAll()
        .then(users => {
            let isWalletSaved = []
            users.forEach(user => {
                if (user.name === name || user.wallet === wallet) {
                    isWalletSaved.push(true)
                    let embedInfo = {
                        title: "Error!",
                        description: "This name/wallet was taken by another account, try again"
                    }
                    info.msg.reply( {embeds: [normalEmbed(embedInfo)] })
                }
            })

            console.log(isWalletSaved.length)
            if (isWalletSaved.length === 0) {
                
                let walletInfo = {
                    name: name,
                    wallet: wallet
                }

                db.User.create(walletInfo)
                .then(data => {
                    let embedInfo = {
                        title: "Success!",
                        description: "The wallet `" + wallet + "` has been succesfully linked with the name `" + name + "`!",
                        color: "GREEN"
                    }
    
                    info.msg.reply({ embeds: [normalEmbed(embedInfo)] })
                })
            }
        })
        
    }

}