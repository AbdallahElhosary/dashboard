import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvater";



const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: end;
  gap:0.5rem;
`;

function Header() {

  return (
    <StyledHeader>
      <HeaderMenu />
      <UserAvatar />
    </StyledHeader>
  )
  
}

export default Header;
