import { WebSocketServer } from 'ws';
import http from 'http';
import { dataStore } from '../data/mockDb';

const server = http.createServer();
const port = 3002

const wsServer = new WebSocketServer({ server });

wsServer.on('connection', (connection) => {
    connection.on('message', (data) => {
        const username = `${data}`;

        dataStore.webSocketConnections[username] = {
            socketConnection: connection
        };
    });
});
server.listen(port, () => {
    return console.log(`Websocket is listening at http://localhost:${port}`);
});