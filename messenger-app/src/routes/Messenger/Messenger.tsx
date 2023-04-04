import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import { AuthContext } from '../../components/AuthWrapper';
import { createNewMessage, createNewUserChat, getMessages, loadUserChats } from '../../utils/api';
import { ChatList, NewChat } from './components/ChatList';
import { MessageFeed, NewMessage } from './components/MessageFeed';
import { Chat, Message } from '../../utils/types';
// import { socketClient } from '../../utils/socket';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { SOCKET_URL } from '../../utils/constants';


export const Messenger: React.FC<{}> = () => {
    const [activeChat, setActiveChat] = useState<string>('');
    const [chatList, setChatList] = useState<Chat[]>([]);
    const [messageFeed, setChatMessageFeed] = useState<Message[]>([]);
    const { authHeader, username } = useContext(AuthContext);

    const socketClient = new W3CWebSocket(SOCKET_URL);

    socketClient.onopen = () => {
        socketClient.send(username);
    }

    socketClient.onmessage = (message) => {
        if (message.data.toString() === 'NEW_CHAT') {
            loadChats();
        } else {
            const chatId = message.data.toString();
            loadMessages(chatId);
        }
    }

    const loadMessages = (chatId: string) => {
        getMessages(authHeader, chatId)
            .then((response) => response.json())
            .then((body) => setChatMessageFeed(body.messages))
    };

    const sendNewMessage = (message: string) => {
        createNewMessage(authHeader, message, activeChat)
            .then(() => loadMessages(activeChat))
    };

    const loadChats = () => {
        loadUserChats(authHeader)
            .then((response) => response.json())
            .then((body) => setChatList(body.chats))
    };

    const selectChat = (id: string) => {
        setActiveChat(id);
        loadMessages(id);
    };

    const startNewChat = (recipient: string) => {
        createNewUserChat(authHeader, recipient).then((response) => {
            if (response.status < 400) {
                loadChats();
            } else {
                alert('An error occurred when starting this new chat. Please try again.');
            }
        })
        .catch(() => {
            alert('An error occurred when starting this new chat. Please try again.');
        })
    };

    useEffect(() => {
        // Now we will load all the chats for this user;
        loadChats();
    }, []);

    return (<div className="messenger-page">
        <div className="chat-list-container">
            <NewChat createChat={startNewChat}/>
            <ChatList chatList={chatList} setActiveChat={(id: string) => selectChat(id)}/>
        </div>
        <div className="messages-window-container">
            <MessageFeed feedItems={messageFeed}/>
            <NewMessage sendAction={sendNewMessage}/>            
        </div>
    </div>);
};