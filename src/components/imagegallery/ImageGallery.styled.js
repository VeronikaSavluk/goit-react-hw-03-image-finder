import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;