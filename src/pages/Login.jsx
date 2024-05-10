import styled from "styled-components";
import HelmetTag from "../ui/HelmetTag";

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
  return (
    <>
      <HelmetTag title='login' />
      <LoginLayout>Login</LoginLayout>
    </>
  );
}

export default Login;
