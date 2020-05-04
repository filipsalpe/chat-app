import * as React from 'react';
import { prisma } from '../generated/prisma-client';
import { UserContext } from '../authentication/UserContext';
import { MessageInput } from './MessageInput';
import { FileInput } from './FileInput';

export const CreateMessage = () => {
  const user = React.useContext(UserContext);

  const [encodedImage, setEncodedImage] = React.useState<string | null>(null);

  const createMessage = (messageText: string) => {
    prisma.createMessage({ author: { connect: { id: user!.id } }, text: messageText, encodedImage }).then(() => {
      window.location.reload(true); // This is very sad. We should get prisma subscriptions to work
    });
  };

  return <>
    <MessageInput onSubmit={createMessage} />
    <FileInput onEncoded={setEncodedImage} />
  </>;
};
