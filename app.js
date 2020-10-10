const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index.js');


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log('BowlingTest listening at 3000'); // eslint-disable-line no-console
        });