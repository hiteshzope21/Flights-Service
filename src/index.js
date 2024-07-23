const express = require('express');

const {serverConfig} = require('./config');

const app = express();
const {Logger} = require('./config') 
const routes = require('./routes');

app.use('/api', routes);

app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started the server ${serverConfig.PORT}`);
    Logger.info('successfully started server')
})
