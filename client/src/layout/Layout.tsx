import * as React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

export const Layout = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper>
    <Main>{props.children}</Main>
  </Wrapper>
);
