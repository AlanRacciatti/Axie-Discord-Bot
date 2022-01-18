console.clear()
// **** Require's ***
const {Client, Intents} = require('discord.js');
const {token, prefix, logo} = require('./config.js');
const normalEmbed = require('./embeds/normalEmbed');

// **** Bot setup ****
const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

bot.on("ready", () => {
    console.log("Bot is ready");
    bot.user.setActivity(`${prefix}help`, {type: "PLAYING"})
    if (!bot.user.avatar === "https://storage.googleapis.com/assets.axieinfinity.com/axies/277561/axie/axie-full.png") {
        bot.user.setAvatar("https://storage.googleapis.com/assets.axieinfinity.com/axies/277561/axie/axie-full.png")
    }
    bot.user.setUsername("Axie Bot")
});

// **** Commands ****
const help = require('./commands/help');
const myAxies = require('./commands/myAxies');
const myAccount = require('./commands/myAccount')
const coins = require('./commands/coins')
const saveWallet = require('./commands/saveWallet')

// **** Commands handler
bot.on("messageCreate", (msg) => {

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "help") {

        let data = {
            msg: msg,
            logo: logo
        }

        help(data)

    } else if (command === "myaxies") {

        let embedInfo = {
            title: "Running command",
            description: "Running the command `myaxies`"
        }

        msg.channel.send({ embeds: [normalEmbed(embedInfo)] })

        let info = {
            msg: msg,
            args: args
        }

        myAxies(info)

    } else if (command === "myaccount") {

        let embedInfo = {
            title: "Running command",
            description: "Running the command `myaccount`"
        }

        msg.channel.send({ embeds: [normalEmbed(embedInfo)] })

        let info = {
            msg: msg,
            args: args
        }

        myAccount(info)

    } else if (command === "coins") {

        let info = {
            msg: msg
        }

        coins(info)

    } else if (command === "savewallet") {
        
        let info = {
            msg: msg,
            args: args
        }

        saveWallet(info)

    }

});

// *** Login ***
bot.login(process.env.DJS_TOKEN || token);
