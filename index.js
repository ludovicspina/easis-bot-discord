const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const token = ''

client.once('ready', () => {
    console.log("Time to ban.");
});


// client.on("messageCreate", message => {
//     if (message.channelId === "1010353220960407597" || message.channelId === "1061570116728401970" || message.channelId === "1001730557832593530" || message.channelId === "1064938100280807474") {
//         if (message.content.includes("312902889884352514")) {
//             message.channel.send("IDENTIFIZIERT PAMPLER NICHT !!!")
//             message.channel.send("https://tenor.com/view/ww2-croatia-gif-18606680")
//         }
//     }
// })
//
// client.on("messageCreate", message => {
//     if (message.channelId === "1010353220960407597" || message.channelId === "1061570116728401970" || message.channelId === "1001730557832593530" || message.channelId === "1064938100280807474") {
//         if (message.content.includes("314646477215629323")) {
//             message.channel.send("https://tenor.com/view/north-korea-dprk-kim-jong-un-based-gif-23824457")
//         }
//     }
// })

let redArray = [];

function getData() {


}


client.on("messageCreate", message => {
    if (message.content === "$cooldowns") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let tabConstruit = [];
                let base = [];
                data.forEach(player => {
                    if (player.etat_du_cooldown !== "Nouveau joueur") {
                        tabConstruit += (player.participants_inscrits + ' ' + player.etat_du_cooldown + "\n")
                    }
                })
                message.channel.send(tabConstruit)
            })
            .catch((error) => console.log("error"));
    }
})

client.login(token);













