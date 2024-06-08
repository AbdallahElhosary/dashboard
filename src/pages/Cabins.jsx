import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useTranslation } from "react-i18next";
import HelmetTag from "../ui/HelmetTag";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetTag title='cabins' />
    <Row type="horizontal">
        <Heading as="h1">
          {t('All cabins')}
        </Heading>
        <CabinTableOperations />
      </Row>
      
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
