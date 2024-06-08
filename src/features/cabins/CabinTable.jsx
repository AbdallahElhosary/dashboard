// import styled from 'styled-components';
import CabinRow from "./CabinRow"
import { useTranslation } from 'react-i18next';
import Spinner from '../../ui/Spinner';
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";



function CabinTable() {
  
  const { t } = useTranslation();


  const {
    isLoading,
    cabins,
  } = useCabins()

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource='bookings' />;

  

  
  // [1] Filter
  const filterDiscount = searchParams.get("discount") || "all";

  let filterCabins;

  if (filterDiscount === "all") filterCabins = cabins;
  if (filterDiscount === "no-discount") {
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  if (filterDiscount === "with-discount") {
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  // [2] Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortBy.split("-")
  const modifier = direction === "asc" ? 1 : -1;


  const sortedCabins = filterCabins.sort((a, b) => (a[field] - b[field]) * modifier);




  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>{t("Cabin")}</div>
          <div>{t("Capacity")}</div>
          <div>{t("Price")}</div>
          <div>{t("Discount")}</div>
          <div></div>
        </Table.Header>
        <Table.Body 
          // data={filterCabins}
          data={sortedCabins}

          render={((cabin) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          ))}
        />
      </Table>
    </Menus>
  );
}


export default CabinTable;
