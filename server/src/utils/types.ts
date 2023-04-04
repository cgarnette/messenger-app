
export type ChatData = {
    [chatId: string]: {
      participants: string[];
      messages: {
        sender: string;
        recipient: string;
        message: string;
        timestamp: number;
      }[]
    }
  }
  
export type UserData = {
    [username: string]: {
      chats: {
        id: string;
        recipient: string;
        lastUpdated: number;
      }[]
    }
  }