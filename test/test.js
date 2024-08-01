const CustomProtocolHandler = require('../index.js'); // require('urlprotocol');

const protocolHandler = new CustomProtocolHandler('hello');

protocolHandler.register('/alertmessage', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is an alert message!' }));
});

protocolHandler.start(3000);
