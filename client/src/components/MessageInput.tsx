import * as React from 'react';
import { prisma } from '../generated/prisma-client';
import { UserContext } from '../authentication/UserContext';
import styled from '@emotion/styled/macro';

const Input = styled.input`
  font-size: 1em;
  line-height: 2em;
  border-radius: 4px;
  border: 1px solid #8a8a8a;
  margin: 10px;
  padding: 5px 10px;
`;

const ENTER_KEY = 'Enter';

export const MessageInput = () => {
  const user = React.useContext(UserContext);

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) {
      const input = e.target as HTMLInputElement;
      const messageText = input.value;
      input.value = '';
      prisma.createMessage({ author: { connect: { id: user!.id } }, text: messageText }).then(() => {
        window.location.reload(true); // This is very sad. We should get prisma subscriptions to work
      });
    }
  };

  return <Input type="text" placeholder="Message" onKeyDown={submitOnEnter} />;
};
