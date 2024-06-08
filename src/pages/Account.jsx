import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import HelmetTag from "../ui/HelmetTag";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function Account() {

  const {t} = useTranslation()
  return (
    <>
      <HelmetTag title='account' />

      <Heading as="h1">{t("Update your account")}</Heading>

      <Row>
        <Heading as="h3">{t("Update user data")}</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">{t("Update password")}</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
