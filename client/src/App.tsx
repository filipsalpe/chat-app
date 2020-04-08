import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { UserInfo } from './components/UserInfo';
import { Messages } from './components/Messages';

function App() {
  return (
    <UserProvider>
      <Title />
      <UserInfo />
      <Messages />
    </UserProvider>
  );
}

const Title = () => <h1>Just another public chat room</h1>;

export default App;
