import styled from "styled-components";
import Logout from "../features/authentication/Logout";

import { changeLanguage } from "../i18n";
import { useSearchParams } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
`;

function HeaderMenu() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChangeLanguage = (e) => {
        changeLanguage(e)

        searchParams.set("lang", e);

        setSearchParams(searchParams)

    }
    return (
        <StyledHeaderMenu>
            <div className="mydict">
                <div>
                    <label>
                        <input type="radio" name="radio" onClick={() => handleChangeLanguage('en')} />
                        <span>En</span>
                    </label>

                    <label>
                        <input type="radio" name="radio" onClick={() => handleChangeLanguage('fr')} />
                        <span>Fr</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" onClick={() => handleChangeLanguage('gr')} />
                        <span>Gr</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" onClick={() => handleChangeLanguage('ar')} />
                        <span>Ar</span>
                    </label>

                </div>
            </div>
            {/* <li title="account">
                <ButtonIcon onClick={() => navigate("/account")} title="account">
                    <HiOutlineUser />
                </ButtonIcon>
            </li> */}
            <li>
                <DarkModeToggle />
            </li>
            <li>
                <Logout />
            </li>
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;
