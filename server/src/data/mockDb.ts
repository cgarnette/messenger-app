import { UserData } from "../utils/types";

const userData: UserData = {
  cj: {
    chats: [
      //   {
      //   id: '6dc569dd23d76e8ccca1f27b4e63209c',
      //   recipient: 'sam',
      //   lastUpdated: new Date().getTime()
      // }
    ]
  },
  sam: {
    chats: [
      //   {
      //     id: '6dc569dd23d76e8ccca1f27b4e63209c',
      //     recipient: 'cj',
      //     lastUpdated: new Date().getTime()
      //   }
    ]
  }
};

const authData = {
  cj: 'password',
  sam: 'password',
  bob: 'password',
  lisa: 'password'
};

type WebSocketConnections = {
  [x: string]: {
    socketConnection: any
  }
};

const webSocketConnections: WebSocketConnections = {
};

export const dataStore = {
  userData,
  chatData: {},
  authData,
  webSocketConnections
}