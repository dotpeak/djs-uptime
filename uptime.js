const Discord = require("discord.js")

module.exports = async (client, message, args) => {
        var milliseconds = parseInt((message.client.uptime % 1000) / 100),
            seconds = parseInt((message.client.uptime / 1000) % 60),
            minutes = parseInt((message.client.uptime / (1000 * 60)) % 60),
            hours = parseInt((message.client.uptime / (1000 * 60 * 60)) % 1000);
    
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        message.channel.send({
            embed: 
            {
                color: 0x32CD32,
                author: { name: "Bot uptime" },
                description: "Hours: " + hours + " Minutes: " + minutes + ''
            }
        })
    }
module.exports.command = {
    id: 0,
    name: "uptime",
    activated: true,
    info: {
        "example": "!uptime",
        "note": "doesnt have days",
        "requirements": ""
    }
}