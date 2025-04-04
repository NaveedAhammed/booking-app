import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const varients = {
  primary: css`
    color: var(--color-primary-50);
    background-color: var(--color-primary-600);

    &:hover {
      background-color: var(--color-primary-700);
    }

    &:focus {
      outline: 2px solid var(--color-primary-600);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }

    &:focus {
      outline: 2px solid var(--color-grey-600);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }

    &:focus {
      outline: 2px solid var(--color-red-700);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${({ varient = 'primary' }) => varients[varient]}
  ${({ size = 'medium' }) => sizes[size]}

  &:focus {
    outline-offset: 2px;
  }
`;

export default Button;
