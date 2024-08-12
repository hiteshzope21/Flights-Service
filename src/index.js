const express = require('express');

const {serverConfig} = require('./config');

const app = express();
const {Logger} = require('./config') 
const routes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);


console.log({port:  serverConfig.PORT})

app.listen(3000, () => {
    console.log(`Successfully started the server ${3000}`);
    Logger.info('successfully started server')
})
