import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import HelmetTag from "../ui/HelmetTag";
import Row from "../ui/Row";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetTag title='settings' />
      <Row>
        <Heading as="h1">{t("Update hotel settings")}</Heading>
        <UpdateSettingsForm />
      </Row>
    </>
  );
}

export default Settings;
