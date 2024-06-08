import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
import TableOperations from '../../ui/TableOperations'

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter 
        filterField="discount" 
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy 
        options={[
          {value:"name-asc" , label: "Sort By Name From (A-Z)"},
          { value: "name-desc", label: "Sort By Name From (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price(Low First)" },
          { value: "regularPrice-desc", label: "Sort By Price(High First)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity(Low First)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity(High First)" },

        ]}
      />

      
    </TableOperations>
  )
}

export default CabinTableOperations
