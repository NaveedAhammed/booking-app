import styled from 'styled-components';
import Row from './Row';

const Img = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

const Brand = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
`;

function Logo() {
  return (
    <Row type="vertical" style={{ alignItems: 'center' }}>
      <Img src="/logo.png" alt="Logo" />
      <Brand>HomelyStay</Brand>
    </Row>
  );
}

export default Logo;
