import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createNewChat, getAllMessagesFromChat, getUsersActiveChats, newMessage } from './routes/chat';
import { authHandler } from './routes/auth';
import './utils/socketHelpers';

const app = express();
const port = 3001;

app.use(bodyParser.json())
app.use(cors());
app.use(authHandler);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/login', (req, res) => {
  res.sendStatus(200);
});

app.get('/chat', getUsersActiveChats);
app.put('/chat', createNewChat);

app.get('/chat/message', getAllMessagesFromChat);
app.post('/chat/message', newMessage);

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
