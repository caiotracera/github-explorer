import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;
  border: 1px solid rgb(33, 38, 45);
  border-radius: 0.25rem;

  cursor: pointer;
  transition: all 0.2s ease 0s;

  svg {
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
    background: rgb(255, 255, 255);
    color: rgb(10, 14, 18);

    svg {
      color: black;
    }
  }
`;
