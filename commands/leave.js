module.exports = {
    name: 'leave',
    description: 'Makes the bot disconnect from the voice channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You must be in a voice channel to stop the music!');
        await message.channel.send(':thumbsup: Disconnected!');
        await voiceChannel.leave();
    }
}
