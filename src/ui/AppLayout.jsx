import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useEffect } from "react";
import i18n from "../i18n";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap:3.2rem;
`

function AppLayout() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [searchParams]);
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
