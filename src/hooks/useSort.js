import { useState } from "react";

const useSort = (initialSortColumn = null, initialSortOrder = "asc") => {
  const [sortColumn, setSortColumn] = useState(initialSortColumn);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const handleHeaderClick = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = (data) => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      let valueA = a[sortColumn];
      let valueB = b[sortColumn];

      // Special case for sorting "Player" column numerically
      if (sortColumn === "Player") {
        valueA = parseInt(valueA.replace("Player ", ""), 10);
        valueB = parseInt(valueB.replace("Player ", ""), 10);
      }

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  };

  return { sortColumn, sortOrder, handleHeaderClick, sortedData };
};

export default useSort;
