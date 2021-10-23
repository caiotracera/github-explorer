import styled from 'styled-components';

export const Container = styled.section`
  max-width: 500px;
  width: 80%;

  border: 1px solid rgba(33, 38, 45);
  border-radius: 0.5rem;

  header {
    position: relative;

    nav {
      padding: 1rem 1rem;
      display: flex;
      justify-content: space-between;

      background: var(--header);
      height: 10vh;

      svg {
        cursor: pointer;
      }
    }

    img {
      width: 100px;
      height: 100px;

      border: 3px solid rgba(255, 255, 255, 1);
      border-radius: 50%;

      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Content = styled.main`
  margin: 4rem 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-style: italic;
    margin-top: 1rem;

    text-align: center;
    max-width: 60%;
  }
`;

export const UserMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  list-style: none;
  margin-top: 2rem;
`;
