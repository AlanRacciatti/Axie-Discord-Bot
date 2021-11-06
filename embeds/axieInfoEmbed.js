module.exports = (axie) => {

    let axieStats = {
        health: 0,
        speed: 0,
        skill: 0,
        morale: 0
    }

    switch(axie.class){
        case "Aquatic":
            axieStats.health += 39
            axieStats.speed += 39
            axieStats.skill += 35
            axieStats.morale += 27
            break;
        case "Beast":
            axieStats.health += 31
            axieStats.speed += 35
            axieStats.skill += 31
            axieStats.morale += 43
            break;
        case "Bird":
            axieStats.health += 27
            axieStats.speed += 43
            axieStats.skill += 35
            axieStats.morale += 35
            break;
        case "Bug":
            axieStats.health += 35
            axieStats.speed += 31
            axieStats.skill += 35
            axieStats.morale += 39
            break;
        case "Plant":
            axieStats.health += 43
            axieStats.speed += 31
            axieStats.skill += 31
            axieStats.morale += 35
            break;
        case "Reptile":
            axieStats.health += 39
            axieStats.speed += 35
            axieStats.skill += 31
            axieStats.morale += 35
            break;
        case "Dawn":
            axieStats.health += 35
            axieStats.speed += 35
            axieStats.skill += 39
            axieStats.morale += 31
            break;
        case "Dusk":
            axieStats.health += 43
            axieStats.speed += 39
            axieStats.skill += 27
            axieStats.morale += 31
            break;
        case "Mech":
            axieStats.health += 31
            axieStats.speed += 39
            axieStats.skill += 43
            axieStats.morale += 27
            break;
    }

    axie.parts.forEach(part => {
        switch (part.class) {
            case "Aquatic":
                axieStats.health += 1
                axieStats.speed += 3
                axieStats.skill += 0
                axieStats.morale += 0          
                break;
            case "Beast":
                axieStats.health += 0
                axieStats.speed += 1
                axieStats.skill += 0
                axieStats.morale += 3          
                break;
            case "Bird":
                axieStats.health += 0
                axieStats.speed += 3
                axieStats.skill += 0
                axieStats.morale += 1         
                break;
            case "Bug":
                axieStats.health += 1
                axieStats.speed += 0
                axieStats.skill += 0
                axieStats.morale += 3          
                break;
            case "Plant":
                axieStats.health += 3
                axieStats.speed += 0
                axieStats.skill += 0
                axieStats.morale += 1          
                break;
            case "Reptile":
                axieStats.health += 3
                axieStats.speed += 1
                axieStats.skill += 0
                axieStats.morale += 0          
                break;
        }
    })

    const { MessageEmbed } = require('discord.js');
    const axieInfoEmbed = new MessageEmbed()
    .setColor("#BF79D1")
    .setImage(`https://storage.googleapis.com/assets.axieinfinity.com/axies/${axie.id.toString()}/axie/axie-full.png`)
    .setDescription(`**Name**: ${axie.name}`)
    .addFields(
        { name: "Class", value: axie.class, inline: true},
        { name: "Health", value: axieStats.health.toString(), inline: true},
        { name: "Speed", value: axieStats.speed.toString(), inline: true},
        { name: "Breedcount", value: axie.breedCount.toString(), inline: true},
        { name: "Skill", value: axieStats.skill.toString(), inline: true},
        { name: "Morale", value: axieStats.morale.toString(), inline: true}
    )
    .setTitle(axie.id.toString())
    .setURL(`https://marketplace.axieinfinity.com/axie/${axie.id.toString()}`)

    return axieInfoEmbed
}
