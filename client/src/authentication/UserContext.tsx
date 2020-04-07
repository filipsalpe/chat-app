import * as React from 'react';
import { prisma, User } from '../generated/prisma-client';
import { PickUsername } from '../components/PickUsername';

export const UserContext = React.createContext<User | null>(null);

export const UserProvider: React.FC = (props) => {
  const [user, setUser] = React.useState<User | null>(null);

  const userId = localStorage.getItem('user_id');

  const createUser = (username: string) =>
    prisma.createUser({ name: username }).then((u) => {
      setUser(u);
      if (u) {
        localStorage.setItem('user_id', u.id);
      }
    });

  if (userId) {
    prisma.user({ id: userId }).then((u) => {
      setUser(u);
    });
  } else {
    return <PickUsername onSubmit={createUser} />;
  }

  return user ? <UserContext.Provider value={user}>{props.children}</UserContext.Provider> : <p>Loading</p>;
};
