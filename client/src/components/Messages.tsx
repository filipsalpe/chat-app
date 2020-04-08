import * as React from 'react';
import { prisma, Message } from '../generated/prisma-client';
import styled from '@emotion/styled/macro';

const MessageContainer = styled.div`
  margin: 5px 20px;
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
`;
const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const MessageText = styled.p`
  margin: 0;
`;
const MessageDate = styled.span`
  margin-left: 10px;
  color: #aaa;
`;
const MessageAuthor = styled.span`
  font-weight: bold;
`;

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

  return <>{messages.map(MessageComponent)}</>;
};

const MessageComponent = (msg: MessageWithAuthor) => {
  return (
    <MessageContainer key={msg.id}>
      <MessageHeader>
        <MessageAuthor>{msg.author.name}</MessageAuthor>
        <MessageDate>{new Date(msg.createdAt).toLocaleTimeString()}</MessageDate>
      </MessageHeader>
      <MessageText>{msg.text}</MessageText>
    </MessageContainer>
  );
};
