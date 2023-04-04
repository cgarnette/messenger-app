import { createNewChat, getAllMessagesFromChat, newMessage } from "../src/routes/chat";


describe('createNewChat()', () => {
    test('Should create a new chat object under chatData in the datastore', async () => {

    });
    test('Should add a new chat to userData under each participants username in datastore', async () => {

    });
    test('Should send message to recipient if they are connected', async () => {

    });
  });


describe('getAllMessagesFromChat()', () => {
  test('Should return 401 if username does not belong to chat participant', () => {

  });
  test('Should return all messages from chat to user', () => {

  });
});

describe('newMessage()', () => {
  test('Should add a new message to the chat', () => {

  });
  test('Should send message to recipient if theyre connected', () => {

  });
});