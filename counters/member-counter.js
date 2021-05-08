module.exports = async (client) => {
    const guild = client.guilds.cache.get('662209917184376842');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('839967709063675945');
        channel.setName(`Total Members: ${memberCount}`);
        console.log('Updating member count...');
    }, 5000);
}