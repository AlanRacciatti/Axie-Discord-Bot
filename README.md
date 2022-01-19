# Axie Infinity Discord Bot

#### [Add the bot to your server!](https://discord.com/api/oauth2/authorize?client_id=906112999952105472&permissions=8&scope=bot)

## Welcome!
This is a Discord bot made with Node.js using Discord.js. The objective is to make it easier for people to share data about his Axie Infinity accounts or team via Discord, as much as getting the coins prices.

## Table of contents

- [Installation and usage](#installation-and-usage)
- [Commands](#commands)
- [Support](#support)
- [About the project](#about-the-project)

## Installation and usage

Use the package manager [npm](https://www.npmjs.com/) to install the packages

```bash
npm install
```

If you want to run this Discord bot you will need to make a ```.env``` file and it should look like this:

```
PRODUCTION_USERNAME=blabla
PRODUCTION_PASSWORD=blabla
PRODUCTION_DATABASE=blabla
PRODUCTION_HOST=blabla
PRODUCTION_DIALECT=blabla
TOKEN=blabla
RAPIDAPIKEY=blabla
```
Where do we find this information? Here is a list:

- **Production variables**: This is the database credentials, you can use a free database service like [AlwaysData](https://www.alwaysdata.com/en/)
- **Token**: This is the Discord bot token, you'll need to get it creating a bot in the [Discord Developer Portal](https://discord.com/developers/applications)
- **RapidAPI Key**: Make an account and get the API key from the [RapidAPI website](https://rapidapi.com/)

## Commands

#### -myaxies ```ronin wallet```
It will show the whole Axies in this Ronin Account
</br>

#### -myaccount ```ronin wallet```
It will show info and stats of this Ronin Account
</br>

#### -coins
It will show statistics of ```SLP``` and ```AXS```

#### -savewallet ```name``` ```ronin wallet```
It will save your wallet so you can put your name instead of your wallet in the other command

## Support

### Creating a new command

If you want to create a new command you have to follow the following steps:

- Create a new js file in the ```commands``` folder and export it:
```js
module.exports = (info) => {
    let { content } = info.msg;
    let { username } = info.msg.author;

    info.msg.reply(`Hey ${username}! You've sent the message ${content}`);
}
```
- Import the function in the ```index.js``` file:
```js
// **** Commands ****
const help = require('./commands/help');
const myAxies = require('./commands/myAxies');
const myAccount = require('./commands/myAccount')
const coins = require('./commands/coins')
const saveWallet = require('./commands/saveWallet')
const test = require('./commands/test')
```
- Add the command in the ```index.js``` file:
```js
else if (command === "savewallet") {
  let info = {
      msg: msg,
      args: args
  }
  saveWallet(info)
  
} else if (command === "newCommand") {
  newCommand()
}
```

## About the project

### Project status
The project is being updated as Axie Infinity dev's updates their API ([Axie Infinity's API documentation](https://rapidapi.com/jchbasco/api/axie-infinity))

### Contributing

Are you interested in adding new features to the client? Your ideas are always welcome, for any change you want to do just make a pull request or for major changes try making an issue, help is my best friend :)

### License
[MIT](https://choosealicense.com/licenses/mit/)
