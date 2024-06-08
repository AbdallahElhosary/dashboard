import styled from "styled-components";
import HelmetTag from "../ui/HelmetTag";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetTag title='login' />
      <LoginLayout>
        <Logo />
        <Heading as="h4">{t("Log In To Your Account")}</Heading>
        <LoginForm />
      </LoginLayout>
    </>
  );
}

export default Login;
