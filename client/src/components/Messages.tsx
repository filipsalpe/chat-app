import * as React from 'react';
import { prisma, Message } from '../generated/prisma-client';

type MessageWithAuthor = Message & { author: { name: string } };

const GET_MESSAGES = `query ($orderBy: MessageOrderByInput) {
  messages(orderBy: $orderBy) {
    id
    text
    createdAt
    updatedAt
    author {
      name
    }
  }
}`;

export const Messages = () => {
  const [messages, setMessages] = React.useState<MessageWithAuthor[]>([]);
  const [messagesRequested, setMessagesRequested] = React.useState(false);
  if (!messagesRequested) {
    prisma.$graphql(GET_MESSAGES, { orderBy: 'createdAt_ASC' }).then(({ messages }) => setMessages(messages));
    setMessagesRequested(true);
  }

  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id}>
          <p>{msg.text}</p>
          <p>{new Date(msg.createdAt).toLocaleTimeString()}</p>
          <p>{msg.author.name}</p>
        </div>
      ))}
    </>
  );
};
