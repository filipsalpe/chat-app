import * as React from 'react';
import { prisma } from '../generated/prisma-client';
import { UserContext } from '../authentication/UserContext';

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

  return <input type="text" onKeyDown={submitOnEnter} />;
};
