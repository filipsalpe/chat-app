import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { Layout } from './layout/Layout';
import { RoomTitle } from './components/RoomTitle';
import { UserInfo } from './components/UserInfo';
import { UsersList } from './components/UsersList';
import { Messages } from './components/Messages';
import { MessageInput } from './components/MessageInput';

function App() {
  return (
    <UserProvider>
      <Layout>
        <RoomTitle />
        <UserInfo />
        <UsersList />
        <Messages />
        <MessageInput />
      </Layout>
    </UserProvider>
  );
}

export default App;
