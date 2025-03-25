import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  outline: none;

  &:focus-visible {
    border-color: var(--color-primary-500);
  }
`;

export default Input;
