import * as React from 'react';
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

export interface MessageInputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, "onSubmit"> {
  onSubmit(text: string): void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSubmit }) => {
  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) {
      const input = e.target as HTMLInputElement;
      const messageText = input.value;
      input.value = '';
      onSubmit(messageText);
    }
  };

  return <Input type="text" placeholder="Message" onKeyDown={submitOnEnter} />;
};
