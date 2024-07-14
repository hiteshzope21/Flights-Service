const express = require('express');

const {PORT} = require('./config');

const app = express();

const routes = require('./routes');

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Successfully started the server ${PORT}`);
})
