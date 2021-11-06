console.log("buenas")
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log("Running server 3000")
})

app.get("/", (req, res) => {
    res.json({name: "name"})
})

// console.clear()

// // **** Require's ****
// const axios = require('axios').default;
// const {Client, Intents} = require('discord.js');
// const {token, prefix, logo} = require('./config.json');

// // **** Bot setup ****
// const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

// bot.on("ready", () => {
//     console.log("Bot is ready");
//     bot.user.setActivity(`${prefix}help`, {type: "PLAYING"})
//     if (!bot.user.avatar === "https://storage.googleapis.com/assets.axieinfinity.com/axies/277561/axie/axie-full.png") {
//         bot.user.setAvatar("https://storage.googleapis.com/assets.axieinfinity.com/axies/277561/axie/axie-full.png")
//     }
//     bot.user.setUsername("Axie Bot")
// });

// // **** Commands ****
// const help = require('./commands/help');
// const myAxies = require('./commands/myAxies');

// // **** Commands handler
// bot.on("messageCreate", (msg) => {

//     if (msg.author.bot) return;
//     if (!msg.content.startsWith(prefix)) return;

//     const commandBody = msg.content.slice(prefix.length);
//     const args = commandBody.split(' ');
//     const command = args.shift().toLowerCase();

//     if (command === "help") {

//         let data = {
//             msg: msg,
//             logo: logo
//         }

//         help(data)
//     } else if (command === "myaxies") {

//         let info = {
//             msg: msg,
//             args: args
//         }

//         myAxies(info)

//     }

// });

// // **** Login ****
// bot.login(process.env.DJS_TOKEN);
