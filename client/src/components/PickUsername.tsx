import * as React from 'react';

interface PickUsernameProps {
  onSubmit(username: string): void;
}

export const PickUsername = ({ onSubmit }: PickUsernameProps) => {
  return (
    <>
      <p>Please pick a username</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = (e.target as any).elements.username.value; // @todo find a neater way to read the input value
          onSubmit(username);
        }}
      >
        <input name="username" type="text" />
        <button type="submit">Pick this username</button>
      </form>
    </>
  );
};
