/**
 * Node.js App configs
 */

const config = {

    mode: 'development', // production
    port: parseInt(process.env.PORT, 10) || 3000

};

module.exports = config;
