import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { UserInfo } from './components/UserInfo';

function App() {
  return (
    <UserProvider>
      <Title />
      <UserInfo />
    </UserProvider>
  );
}

const Title = () => <h1>Just another public chat room</h1>;

export default App;
