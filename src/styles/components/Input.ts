import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 16.625rem;
  height: 2rem;

  background: var(--background);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 0.25rem;

  input {
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    background: inherit;
    color: var(--text);

    &:focus {
      outline: none;
    }
  }
`;
