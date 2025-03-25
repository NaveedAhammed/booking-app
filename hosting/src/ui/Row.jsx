import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${({ type = 'horizantal' }) =>
    type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${({ type = 'horizantal' }) =>
    type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
