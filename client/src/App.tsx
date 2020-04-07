import * as React from 'react';
import { UserProvider, UserContext } from './authentication/UserContext';

function App() {
  return (
    <UserProvider>
      <Title />
      <UserInfo />
    </UserProvider>
  );
}

const Title = () => <h1>Just another public chat room</h1>;

const UserInfo = () => {
  const user = React.useContext(UserContext);
  return user && <p>You are logged in as {user.name}</p>;
};

export default App;
