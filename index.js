const {Client, Intents, MessageEmbed} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const lib = require('lib');
const token = ''

client.once('ready', () => {
    console.log("Time to ban.");
});

client.on("messageCreate", message => {
    if (message.content === "$red ready") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let TANK = [];
                let DPS = [];
                let HEAL = [];
                let HELP = [];
                data.forEach(player => {
                    if (player.etat_du_cooldown !== "Nouveau joueur") {
                        if (player.etat_du_cooldown === "CD terminé") {
                            if (player.role === "Tank") {
                                TANK += (player.participants_inscrits + " => " + ":white_check_mark:" + "\n")
                            } else if (player.role === "DPS" || player.role === "Low DPS") {
                                DPS += (player.participants_inscrits + " => " + ":white_check_mark:" + "\n")
                            } else if (player.role === "Prêtre principal") {
                                HEAL += (player.participants_inscrits + " => " + ":white_check_mark:" + "\n")
                            } else if (player.role === "Prêtre rez") {
                                HELP += (player.participants_inscrits + " => " + ":white_check_mark:" + "\n")
                            }
                        }
                    }
                })
                message.channel.send({
                    embeds: [{
                        type: "rich",
                        title: "Liste des cooldowns terminés",
                        color: 0x890303,
                        description: "**__Tanks :__**\n" + TANK + "\n" + "**__Dps :__**\n" + DPS + "\n" + "**__Main healer :__**\n" + HEAL + "\n" + "**__Help healer :__**\n" + HELP,
                        footer: {
                            text: "Bot by @pamp1n / Google Docs by @Caldera"
                        },
                        url: "https://docs.google.com/spreadsheets/d/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/edit#gid=0"
                    }]
                });
            })
            .catch((error) => console.log("error"));
    }
})

client.on("messageCreate", message => {
    if (message.content === "$red cooldowns") {
        fetch("https://opensheet.elk.sh/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/CD%20RedM")
            .then((response) => response.json())
            .then((data) => {
                let TANK = [];
                let DPS = [];
                let HEAL = [];
                let HELP = [];
                data.forEach(player => {
                    if (player.etat_du_cooldown !== "Nouveau joueur") {
                        if (player.etat_du_cooldown !== "CD terminé") {
                            if (player.role === "Tank") {
                                TANK += (player.participants_inscrits + " => " + player.etat_du_cooldown + "\n")
                            } else if (player.role === "DPS" || player.role === "Low DPS") {
                                DPS += (player.participants_inscrits + " => " + player.etat_du_cooldown + "\n")
                            } else if (player.role === "Prêtre principal") {
                                HEAL += (player.participants_inscrits + " => " + player.etat_du_cooldown + "\n")
                            } else if (player.role === "Prêtre rez") {
                                HELP += (player.participants_inscrits + " => " + player.etat_du_cooldown + "\n")
                            }
                        }
                    }
                })
                message.channel.send({
                    embeds: [{
                        type: "rich",
                        title: "Liste des cooldowns cours",
                        color: 0x890303,
                        description: "**__Tanks :__**\n" + TANK + "\n" + "**__Dps :__**\n" + DPS + "\n" + "**__Main healer :__**\n" + HEAL + "\n" + "**__Help healer :__**\n" + HELP,
                        footer: {
                            text: "Bot by @pamp1n / Google Docs by @Caldera"
                        },
                        url: "https://docs.google.com/spreadsheets/d/1Om7FhiE9yNgUN7PLGJ0f9Xqux7x03qP4tUBYe751qP0/edit#gid=0"
                    }]
                });
            })
            .catch((error) => console.log("error"));
    }
})


client.login(token);













