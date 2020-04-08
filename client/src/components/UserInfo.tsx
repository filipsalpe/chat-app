import * as React from 'react';
import { UserContext } from '../authentication/UserContext';

export const UserInfo = () => {
  const user = React.useContext(UserContext);
  return user && <p>You are logged in as {user.name}</p>;
};
