// import styled from 'styled-components';
import CabinRow from "./CabinRow"
import { useTranslation } from 'react-i18next';
import Spinner from '../../ui/Spinner';
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// v2
// Right now this is not really reusable... But we will want to use a similar table for guests as well, but with different columns. ALSO, right now we are defining these columns in BOTH the TableHeader and the CabinRow, which is not good at all. Instead, it would be much better to simply pass the columns into the Table, and the table would give access to the columns to both the header and row. So how can we do that? Well we can again use a compound component! We don't HAVE to do it like this, there's a million ways to implement a table, also without CSS Grid, but this is what I chose



// We want each table row to have a menu, and we only want one of them to be open at the same time. We also want this functionality to be reusable. We could add a openID state here to the table, but that wouldn't really be reusable... The best way is to use a compound component

// The hotel won't ever have a lot of cabins, so there is no need to paginate. So we will do no pagination, AND we will do filtering and sorting. So here we learn how to do it on the FRONT-ND (later in the booking we will do the BACK-END version, which is more real world)

function CabinTable() {
  // We enabled Suspense on this query with React Query. This will make it so that this component is SUSPENDED while the data is still loading. We then have to add a <Suspense> boundary somewhere OUTSIDE this component to instruct React to SUSPEND, so to PAUSE, the rendering of this component until the data has been loaded.
  // So basically, we are delegating the loading (and also error handling) to the nearest Suspense up in the tree. That Suspense boundary keeps WAITING until the component is no longer suspending, and then renders it.
  // So, React Query made loading data SO MUCH EASIER, as it creates the loading states for us. BUT, we still have to manage displaying loading spinners in the UI manually. With suspense, that's all gone! It can basically "decide" not to render this component until the data has arrived. This is completely different... Before Suspense, components ALWAYS rendered, but we could choose to then render a spinner while the data has not arrived yet. With Suspense it's different. The component will not even be rendered in the first place. This is what React's modern "concurrent features" are all about, where things can be deferred into the FUTURE (such as rendering components, in this case)

  // It's EXTREMELY important to understand that this functionality is enabled by React Query, and can also be enabled by other data loading libraries or frameworks. But we as developers can NOT directly tell React "hey, this component should be suspended until some data is arriving", at least not yet. For example, React won't automatically detect when we're fetching data in a component in a useEffect or so. There will be something in the future, and then I will add it to the course, but not yet

  // Now, everything that's inside a Suspense will be treated as just one unit, so when just one component of the child components is currently suspended, all of them will be replaced with the fallback. We can nest multiple Suspense boundaries, and the closest one will be shown. This way, when we have a big Suspense on the top on the tree, it won't have to WAIT

  const { t } = useTranslation();


  const {
    isLoading,
    cabins,
  } = useCabins()

  if (isLoading) return <Spinner />;




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
          data={cabins}
          render={((cabin) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          ))}
        />
      </Table>
    </Menus>
  );
}


export default CabinTable;
