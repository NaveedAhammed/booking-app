import styled from 'styled-components';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3.2rem 2.4rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Logo = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Logo>
        <Img src="/logo.svg" alt="Booking App logo" />
      </Logo>
      <MainNav />
    </StyledSidebar>
  );
}

export default SideBar;
