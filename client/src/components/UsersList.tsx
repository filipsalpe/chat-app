import * as React from 'react';
import { prisma, User } from '../generated/prisma-client';

export const UsersList = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [usersRequested, setUsersRequested] = React.useState(false);
  if (!usersRequested) {
    prisma.users().then(setUsers);
    setUsersRequested(true);
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
