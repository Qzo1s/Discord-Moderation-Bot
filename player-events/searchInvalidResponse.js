module.exports = (bot, message, query, tracks, content, collector) => {

    message.channel.send(' - You must send a valid number between **1** and **${tracks.length}** !');

};