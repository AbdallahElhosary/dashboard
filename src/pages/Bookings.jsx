import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import HelmetTag from "../ui/HelmetTag";

function Bookings() {
  const { t } = useTranslation();

  return (
    <Row type="horizontal">
      <HelmetTag title='bookings' />
      <Heading as="h1">{t("All bookings")}</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
