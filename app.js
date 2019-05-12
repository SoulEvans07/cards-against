const { port, env } = require('./config/vars');
const app = require('./config/express');

app.listen(port, () => 
	console.log('App running on: localhost:' + port + ' env: ' + env)
);
