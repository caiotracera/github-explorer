import styled from 'styled-components';

export const Container = styled.ul`
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

export const Repository = styled.li`
  padding: 2rem 0;

  p {
    display: inline;
    font-style: normal;
    font-size: 0.875rem;
  }

  .card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;

    svg {
      cursor: pointer;
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 15px;

      & + span {
        margin-left: 1.5rem;
      }

      svg {
        margin-right: 0.25rem;
      }
    }
  }

  & + li {
    border-top: 1px solid rgb(33, 38, 45);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
