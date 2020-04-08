import * as React from 'react';
import { prisma, User } from '../generated/prisma-client';
import styled from '@emotion/styled/macro';

const List = styled.ul`
  list-style: none;
  mergin: 0;
  padding: 0;
`;
const Item = styled.li`
  line-height: 3em;
  padding-left: 20px;
  border-bottom: 1px solid #ebebeb;
`;

export const UsersList = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [usersRequested, setUsersRequested] = React.useState(false);
  if (!usersRequested) {
    prisma.users().then(setUsers);
    setUsersRequested(true);
  }

  return (
    <List>
      {users.map((user) => (
        <Item key={user.id}>{user.name}</Item>
      ))}
    </List>
  );
};
