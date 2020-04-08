import * as React from 'react';
import { prisma, Message } from '../generated/prisma-client';

export const Messages = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [messagesRequested, setMessagesRequested] = React.useState(false);
  if (!messagesRequested) {
    prisma.messages({ orderBy: 'createdAt_ASC' }).then(setMessages);
    setMessagesRequested(true);
  }

  return (
    <>
      {messages.map((m) => (
        <div>
          <p>{m.text}</p>
          <p>{new Date(m.createdAt).toLocaleTimeString()}</p>
        </div>
      ))}
    </>
  );
};
