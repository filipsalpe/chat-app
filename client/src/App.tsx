import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { Layout } from './layout/Layout';
import { Tabs, Tab } from './layout/Tabs';
import { RoomTitle } from './components/RoomTitle';
import { UserInfo } from './components/UserInfo';
import { UsersList } from './components/UsersList';
import { Messages } from './components/Messages';
import { MessageInput } from './components/MessageInput';

function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>(Tab.CHAT);

  return (
    <UserProvider>
      <Layout>
        <RoomTitle />
        <Tabs activeTab={activeTab} onRequestChange={setActiveTab} />
        {activeTab === Tab.CHAT ? <Messages /> : <UsersList />}
        <MessageInput />
        <UserInfo />
      </Layout>
    </UserProvider>
  );
}

export default App;
