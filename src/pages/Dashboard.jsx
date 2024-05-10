import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import HelmetTag from "../ui/HelmetTag";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <Row type="horizontal">
      <HelmetTag title='dashboard' />

      <Heading as="h1">{t("Dashboard")}</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
