import { useContext, useState } from "react";
import { Message } from "../../../utils/types";
import { AuthContext } from "../../../components/AuthWrapper";

const MessageFeed: React.FC<{ feedItems: Message[] }> = ({ feedItems }) => {
    const { username } = useContext(AuthContext);

    return (
        <div className="message-feed-container">
            {
                feedItems.map((messageItem) => (
                    <div className={`message-container message-${username === messageItem.sender ? 'sent' : 'received'}`}>
                        <span className="message">
                            {messageItem.message}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

const NewMessage: React.FC<{ sendAction: (message: string) => void}> = ({ sendAction }) => {
    const [messageText, setMessageText] = useState<string>('');

    const sendMessage = () => {
        sendAction(messageText);
        setMessageText('');
    };

    return (
        <div className="new-message-entry">
            <input 
                id='message-input' 
                type='text'
                placeholder='New Message' 
                value={messageText} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessageText(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export { MessageFeed, NewMessage }