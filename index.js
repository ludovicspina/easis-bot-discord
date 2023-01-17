const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const token = ''

client.once('ready', () => {
    console.log("Time to ban.");
});

client.on("messageCreate", message => {
    if (message.content === "$red cd") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let tabConstruit = [];
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

client.on("messageCreate", message => {
    if (message.content === "$red dispo") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let tabConstruit = [];
                data.forEach(player => {
                    if (player.etat_du_cooldown !== "Nouveau joueur") {
                        if (player.etat_du_cooldown === "CD terminé") {
                            tabConstruit += (player.participants_inscrits + ' ' + player.etat_du_cooldown + "\n")
                        }
                    }
                })
                message.channel.send(tabConstruit)
            })
            .catch((error) => console.log("error"));
    }
})

client.on("messageCreate", message => {
    if (message.content === "$red cooldowns") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let tabConstruit = [];
                data.forEach(player => {
                    if (player.etat_du_cooldown !== "Nouveau joueur") {
                        if (player.etat_du_cooldown !== "CD terminé") {
                            tabConstruit += (player.participants_inscrits + ' ' + player.etat_du_cooldown + "\n")
                        }
                    }
                })
                message.channel.send(tabConstruit)
            })
            .catch((error) => console.log("error"));
    }
})

client.login(token);













