import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { Layout } from './layout/Layout';
import { UserInfo } from './components/UserInfo';
import { UsersList } from './components/UsersList';
import { Messages } from './components/Messages';
import { MessageInput } from './components/MessageInput';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Title />
        <UserInfo />
        <UsersList />
        <Messages />
        <MessageInput />
      </Layout>
    </UserProvider>
  );
}

const Title = () => <h1>Just another public chat room</h1>;

export default App;
