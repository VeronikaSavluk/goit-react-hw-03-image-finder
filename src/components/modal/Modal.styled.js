import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 59, 92, .9);
  z-index: 1200;
`;

export const Content = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  padding: 24px;
`;