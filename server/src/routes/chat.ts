import { Request, Response } from 'express';
import { dataStore } from '../data/mockDb';
import crypto from 'crypto';

export const getUsersActiveChats = (req: Request, res: Response) => {
    const { username } = res.locals;
    res.json({ chats: dataStore.userData[username].chats });
}

// Create a new chat between two users
export const createNewChat = (req: Request, res: Response) => {
    const { username } = res.locals;
    const { recipient } = req.body;

    const chatId = crypto.randomBytes(16).toString("hex");

    dataStore.chatData[chatId] = {
        participants: [
            username,
            recipient
        ],
        messages: [],
    };

    dataStore.userData[username].chats.push({
        recipient,
        id: chatId,
        lastUpdated: new Date().getTime(),
    });

    dataStore.userData[recipient].chats.push({
        recipient: username,
        id: chatId,
        lastUpdated: new Date().getTime(),
    })

    if (dataStore.webSocketConnections[recipient]) {
        dataStore.webSocketConnections[recipient].socketConnection.send('NEW_CHAT');
    }

    res.sendStatus(201);
}

export const getAllMessagesFromChat = (req: Request, res: Response) => {
    const chatId = req.query.id as string;
    const { username } = res.locals;

    const chatData = dataStore.chatData[chatId];

    if (!chatData.participants.includes(username)) {
        return res.sendStatus(401);
    }

    res.json({ messages: chatData.messages });
}

export const newMessage = (req: Request, res: Response) => {
    const { username } = res.locals;
    const chatId = req.query.id as string;
    const { message } = req.body;

    const currentChat = dataStore.userData[username].chats.find((chat) => chat.id === chatId);

    dataStore.chatData[chatId].messages.push({
        message,
        recipient: currentChat.recipient,
        sender: username,
        timestamp: new Date().getTime(),
    })

    // only send a notification if the user is actively connected to the websocker server
    if (dataStore.webSocketConnections[currentChat.recipient]) {
        dataStore.webSocketConnections[currentChat.recipient].socketConnection.send(chatId);
    }

    res.sendStatus(200);
}