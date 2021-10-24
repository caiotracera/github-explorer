import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 1rem;

  width: 100%;
  max-height: 25rem;
  overflow-y: auto;

  padding: 1rem;
  list-style: none;

  /* width */

  &::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    background: var(--text);
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: var(--container);
  }

  /* Handle on hover */

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      border-radius: 50%;

      margin-right: 1rem;
    }
  }

  & + li {
    border-top: 1px solid rgb(33, 38, 45);
    padding: 1rem 0;
  }
`;
