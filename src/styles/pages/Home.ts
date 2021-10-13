import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: var(--background);
  color: var(--text);

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.75rem;

    margin-top: 0.5rem;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1.25rem;

  margin-top: 1rem;
  width: 19.25rem;
  height: 9.1875rem;
  background: var(--container);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;

  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0.5rem;
  }
`;

export const SearchButton = styled.button`
  margin-top: 1.25rem;
  height: 2rem;
  width: 100%;

  background: var(--success);
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  border: 0;
  border-radius: 0.25rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  font-size: 11px;
  color: var(--text);

  a {
    text-decoration: underline;
  }
`;
