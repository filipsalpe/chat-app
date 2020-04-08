import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { UserInfo } from './components/UserInfo';
import { UsersList } from './components/UsersList';
import { Messages } from './components/Messages';

function App() {
  return (
    <UserProvider>
      <Title />
      <UserInfo />
      <UsersList />
      <Messages />
    </UserProvider>
  );
}

const Title = () => <h1>Just another public chat room</h1>;

export default App;
