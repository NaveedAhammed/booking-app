import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ type = 'horizontal' }) =>
    type === 'horizontal' &&
    css`
      align-items: center;
      gap: 1rem;
    `}

  ${({ type = 'horizontal' }) =>
    type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
