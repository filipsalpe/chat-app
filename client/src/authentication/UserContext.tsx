import * as React from 'react';
import { prisma, User } from '../generated/prisma-client';
import { PickUsername } from '../components/PickUsername';

export const UserContext = React.createContext<User | null>(null);

export const UserProvider: React.FC = (props) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [userRequested, setUserRequested] = React.useState(false);

  const userId = localStorage.getItem('user_id');

  const createUser = (username: string) => {
    setUserRequested(true);
    prisma.createUser({ name: username }).then((u) => {
      setUser(u);
      if (u) {
        localStorage.setItem('user_id', u.id);
      }
    });
  };

  if (!userRequested) {
    if (!userId) return <PickUsername onSubmit={createUser} />;

    setUserRequested(true);
    prisma.user({ id: userId }).then((u) => {
      if (u) {
        setUser(u);
      } else {
        localStorage.removeItem('user_id');
      }
    });
  }

  return user ? <UserContext.Provider value={user}>{props.children}</UserContext.Provider> : <p>Loading</p>;
};
