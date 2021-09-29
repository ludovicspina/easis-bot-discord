const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const token = 'ODkyNzU0OTM3MjA4MDA0NjU4.YVRg0w.M5Uha3zci1gFF_cqjBVPq3QEoIs'

client.once('ready', () => {
    console.log("LA REPUBLIQUE, C'EST MOI!");
});

client.on("messageCreate", message => {
    const rand = Math.floor(Math.random() * 200);
    if (!message.author.bot) {
        switch (rand) {
            case 20:
                message.channel.send("Vous avez pas honte ?")
                break
            case 40:
                message.channel.send("Vous êtes un raciste !")
                break
            case 60:
                message.channel.send("Tu fermes ta petite bouche et tu me parles de politique.")
                break
            case 80:
                message.channel.send("Va voir les mecs de droite !")
                break
        }
    }
})

client.on("messageCreate", message => {
    if (message.content === "Mélanchon, je t'invoque !") {
        message.channel.send("La république, c'est moi!")
    }
})

// client.on("messageCreate", message => {
//     if (!message.author.bot) {
//         if (message.content.includes("tg" || "connard" || "pute")) {
//             message.channel.send("Moi? Moi? Moi?! Mais qui elle est celle là !")
//         }
//     }
// })

client.login(token);













