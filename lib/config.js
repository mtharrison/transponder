module.exports = {
    interval: process.env.INTERVAL || 1000,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8125,
    prefix: process.env.PREFIX || ''
};
