import * as React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div`
  display: flex;
  background: #ebebeb;
`;
const ClickableTab = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 3em;
  background: ${(props) => (props.active ? 'white' : 'transparent')};
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  &:nth-of-type(1) {
    border-top-right-radius: 5px;
  }
  &:nth-of-type(2) {
    border-top-left-radius: 5px;
  }
`;

export enum Tab {
  USERS,
  CHAT,
}

export interface TabsProps {
  activeTab: Tab;
  onRequestChange(activeTab: Tab): void;
}

export const Tabs = (props: TabsProps) => {
  return (
    <Wrapper>
      <ClickableTab active={props.activeTab === Tab.USERS} onClick={() => props.onRequestChange(Tab.USERS)}>
        Participants
        {/* @todo we need the number of participants too */}
      </ClickableTab>
      <ClickableTab active={props.activeTab === Tab.CHAT} onClick={() => props.onRequestChange(Tab.CHAT)}>
        Chat
      </ClickableTab>
    </Wrapper>
  );
};
