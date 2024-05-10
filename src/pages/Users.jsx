import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import HelmetTag from "../ui/HelmetTag";

function NewUsers() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetTag title='users' />
      <Heading as="h1">{t("Create a new user")}</Heading>;
    </>
  )
}

export default NewUsers;
