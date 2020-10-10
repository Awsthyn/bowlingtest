const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index.js');

app.use('/', routes);


app.listen(PORT, () => {
    console.log('BowlingTest listening at 3000'); // eslint-disable-line no-console
        });