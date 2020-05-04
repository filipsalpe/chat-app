import * as React from 'react';
import { UserProvider } from './authentication/UserContext';
import { Layout } from './layout/Layout';
import { Tabs, Tab } from './layout/Tabs';
import { RoomTitle } from './components/RoomTitle';
import { UsersList } from './components/UsersList';
import { Messages } from './components/Messages';
import { CreateMessage } from './components/CreateMessage';

function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>(Tab.CHAT);

  return (
    <UserProvider>
      <Layout>
        <RoomTitle />
        <Tabs activeTab={activeTab} onRequestChange={setActiveTab} />
        {activeTab === Tab.CHAT ? (
          <>
            <Messages />
            <CreateMessage />
          </>
        ) : (
          <UsersList />
        )}
      </Layout>
    </UserProvider>
  );
}

export default App;
