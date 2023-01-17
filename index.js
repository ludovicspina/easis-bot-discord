const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const token = 'MTA2NDkxODM2NDYwNDA4NDIyNQ.G47VtM.HXTWg5gClPzYT8OpB-SV0QKTYWzNITdDJK0zY8'

client.once('ready', () => {
    console.log("Time to ban.");
});

client.on("messageCreate", message => {
    if (message.channelId === "1010353220960407597" || message.channelId === "1061570116728401970") {
        if (message.content.includes("312902889884352514")) {
            message.channel.send("IDENTIFIZIERT PAMPLER NICHT !!!")
            message.channel.send("https://tenor.com/view/ww2-croatia-gif-18606680")
        }
    }
})


// client.on('message', async (message) => {
//     const [, ...args] = message.content.slice("=").trim().split("");
//     if (message.content === "=leave") {
//         let Guild = await client.guilds.cache.get(args[0]);
//         if(!Guild){ return(false) } //Can't leave guild
//         return Guild.leave();
//     }
// })

// client.on("messageCreate", message => {
//     const rand = Math.floor(Math.random() * 100);
//     if (!message.author.bot) {
//         switch (rand) {
//             case 20:
//                 message.channel.send("Vous avez pas honte ?")
//                 break
//             case 40:
//                 message.channel.send("Vous êtes un raciste !")
//                 break
//             case 60:
//                 message.channel.send("Tu fermes ta petite bouche et tu me parles de politique.")
//                 break
//             case 80:
//                 message.channel.send("Va voir les mecs de droite !")
//                 break
//         }
//     }
// })

// let armus = ["arabe", "arabes", "Arabe", "Arabes", "Musulman", "Musulmans", "musulman", "musulmans", "bougnoule", "bougnoules", "Bougnoule", "Bougnoules", "Zemmour", "zemmour"]
//
// client.on("messageCreate", message => {
//     if (!message.author.bot) {
//         for (let i = 0; i < armus.length; i++) {
//             if (message.content.includes(armus[i])) {
//                 message.channel.send("https://ludovicspina.fr/bot-img/melenchon.jpg")
//                 return
//             }
//         }
//     }
// })


// client.on("messageCreate", message => {
//     if (!message.author.bot) {
//         if (message.content.includes("tg" || "connard" || "pute")) {
//             message.channel.send("Moi? Moi? Moi?! Mais qui elle est celle là !")
//         }
//     }
// })

client.login(token);













