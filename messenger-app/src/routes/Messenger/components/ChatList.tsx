import { useState } from "react";
import { Chat } from "../../../utils/types";

const ChatList: React.FC<{ chatList: Chat[], setActiveChat: (id: string) => void }> = ({ chatList, setActiveChat }) => {
    const [selectedChat, setSelectedChat] = useState<string>();

    const setActive = (chatId: string) => {
        setSelectedChat(chatId);
        setActiveChat(chatId);
    }

    const getClassName = (chatId: string) => selectedChat === chatId ? 'chat-list-item selected-chat' : 'chat-list-item';
    return (
        <>
            {
                chatList.map((chat: Chat, index: number) => (
                    <div className={getClassName(chat.id)} onClick={() => setActive(chat.id)} key={`${chat.id}-${index}`}>
                        <span key={`${chat.recipient}-${index}`}>
                            {chat.recipient}
                        </span>
                    </div>))
            }
        </>
    );
};

const NewChat: React.FC<{ createChat: (recipient: string) => void }> = ({ createChat }) => {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [recipient, setRecipient] = useState<string>('');

    const onDone = () => {
        createChat(recipient);
        setEditMode(false);
    }

    if (inEditMode) {
        return (
            <div className='chat-list-item'>
                <input type='text' placeholder="Recipient Username" onChange={(e) => setRecipient(e.target.value)}/>
                <button type='submit' onClick={onDone}>Done</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
        );
    }

    return (
        <div className='chat-list-item new-chat-btn' onClick={() => setEditMode(true)}>
            <span>
                Start New Chat
            </span>
        </div>
    );
};

export { ChatList, NewChat}