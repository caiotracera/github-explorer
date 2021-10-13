import styled, { css } from 'styled-components';

import { Tooltip } from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16.625rem;
  height: 2rem;

  background: var(--background);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 0.25rem;
  transition: all 0.2s;

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.7);
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.7);
    `}

    ${props =>
    props.isErrored &&
    css`
      border: 1px solid rgba(218, 54, 51, 1);

      svg {
        color: var(--danger);
      }

      input {
        width: 75%;
      }
    `}

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
