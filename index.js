const http = require('http');
const url = require('url');

class CustomProtocolHandler {
    constructor(protocol) {
        this.protocol = protocol;
        this.handlers = {};
    }

    register(path, handler) {
        this.handlers[path] = handler;
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const handler = this.handlers[parsedUrl.pathname];
        if (handler) {
            handler(req, res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }

    start(port) {
        const server = http.createServer((req, res) => {
            this.handleRequest(req, res);
        });
        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    }
}

module.exports = CustomProtocolHandler;
