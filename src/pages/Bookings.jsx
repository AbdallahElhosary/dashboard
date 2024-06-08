import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import HelmetTag from "../ui/HelmetTag";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  const { t } = useTranslation();

  return (
    <>
    <HelmetTag title='bookings' />
    <Row type="horizontal">
        <Heading as="h1">{t("All bookings")}</Heading>
        <BookingTableOperations />
      </Row>
      
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
