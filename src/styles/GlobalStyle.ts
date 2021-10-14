import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    --background: #0e1117;
    --text: #C9D1D9;
    --container: #161B22;
    --header: #080a0e;
    --success: #238636;
    --danger: #DA3633;
  }

  body {
    color: #C9D1D9;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: #0e1117;
  }
`;
