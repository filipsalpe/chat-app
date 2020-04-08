import * as React from 'react';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  font-size: 1.2em;
  line-height: 2em;
  color: #888;
  text-align: center;
`;

export const RoomTitle = () => <Title>Public chat room</Title>;
