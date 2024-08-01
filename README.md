# Custom URL Protocol

A Node.js library to handle custom URL protocols and route them to specific API paths.

## Installation

To install the package, use npm:

```bash
npm install custom-url-protocol
```

## Usage

The library allows you to define custom URL protocols and route them to specific API paths. Below is an example of how to use the package:

### Example

Create a file named `test.js` and add the following code:

```javascript
const CustomProtocolHandler = require('custom-url-protocol');

const protocolHandler = new CustomProtocolHandler('hello');

protocolHandler.register('/alertmessage', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is an alert message!' }));
});

protocolHandler.start(3000);
```

In this example, when the URL `hello://alertmessage` is called, it will respond with a JSON message: `{"message":"This is an alert message!"}`.

### API

#### `CustomProtocolHandler`

- `constructor(protocol)`
  - Creates a new CustomProtocolHandler for the specified protocol.

- `register(path, handler)`
  - Registers a handler function for the specified path.

- `start(port)`
  - Starts the HTTP server on the specified port.

### Full Example

Here's a complete example of how to use the library:

```javascript
const CustomProtocolHandler = require('custom-url-protocol');

const protocolHandler = new CustomProtocolHandler('hello');

protocolHandler.register('/alertmessage', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is an alert message!' }));
});

protocolHandler.register('/greeting', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});

protocolHandler.start(3000);
```

In this example, two paths are registered: `/alertmessage` and `/greeting`. The `hello://alertmessage` URL will respond with a JSON message, and the `hello://greeting` URL will respond with a plain text message.
