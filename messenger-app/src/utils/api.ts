import { BACKEND_URL } from "./constants";

export const loginRequest = (authHeader: string): Promise<any> => fetch(`${BACKEND_URL}/login`, {
    headers: {
        authorization: `Basic ${authHeader}`
    }
});

export const loadUserChats = (authHeader: string): Promise<any> => fetch(`${BACKEND_URL}/chat`, {
    headers: {
        authorization: `Basic ${authHeader}`
    }
});

export const createNewUserChat = (authHeader: string, recipient: string): Promise<any> => fetch(`${BACKEND_URL}/chat`, {
    headers: {
        authorization: `Basic ${authHeader}`,
        'content-type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
        recipient
    })
});

export const getMessages = (authHeader: string, chatId: string): Promise<any> => fetch(`${BACKEND_URL}/chat/message?id=${chatId}`, {
    headers: {
        authorization: `Basic ${authHeader}`
    }
});

export const createNewMessage = (authHeader: string, message: string, chatId: string): Promise<any> => fetch(`${BACKEND_URL}/chat/message?id=${chatId}`, {
    headers: {
        authorization: `Basic ${authHeader}`,
        'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
        message
    })
});;