import styled from "styled-components";
import { changeLanguage } from "../i18n";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {

  return <StyledHeader>
    <div className="mydict">
      <div>
        <label>
          <input type="radio" name="radio" onClick={() => changeLanguage('en')} />
            <span>En</span>
        </label>
        
        <label>
          <input type="radio" name="radio" onClick={() => changeLanguage('fr')} />
            <span>Fr</span>
        </label>
        <label>
          <input type="radio" name="radio" onClick={() => changeLanguage('ar') } />
          <span>Ar</span>
        </label>

      </div>
    </div>
  </StyledHeader>;
}

export default Header;
