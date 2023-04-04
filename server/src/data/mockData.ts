import { ChatData } from "../utils/types";

const mockChatData: ChatData = {
    '0': {
      participants: ['bob', 'cj'],
      messages: [
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 123452
        },
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 2345234
        },
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 234523
        },
      ],
    },
    '1': {
      participants: ['lucy', 'cj'],
      messages: [
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 234523
        },
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 5432543
        },
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 34534
        },
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 3425345
        },
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 543452
        },
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 3452345
        },
      ],
    },
    '2': {
      participants: ['tasha', 'cj'],
      messages: [
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 3452345
        },
        {
          sender: 'cj',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 342534
        },
        {
          sender: 'cj 2',
          recipient: 'recipient-username',
          message: 'test message',
          timestamp: 2345234
        }
      ],
    }
  }
  
  const mockChats = [
    {
      id: '0',
      recipient: 'bob',
      lastUpdated: 1234564
    },
    {
      id: '1',
      recipient: 'lucy',
      lastUpdated: 1234565
    },
    {
      id: '2',
      recipient: 'tasha',
      lastUpdated: 1234566
    },
  ];