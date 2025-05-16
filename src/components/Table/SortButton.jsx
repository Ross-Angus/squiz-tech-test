import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';

const SortButton = ({ name, tableData, update, sortDirection, setSortDirection }) => {

  const handleSort = (type) => {
    const data = [...tableData].sort((a, b) => {
      // Data is text
      if (isNaN(parseInt(a[type])) && isNaN(parseInt(b[type]))) {
        return sortDirection ? a[type].localeCompare(b[type]): b[type].localeCompare(a[type]);
      }
      // If the two figures being compared are number-like
      // (street names such as "123 Castle Street" will be sorted as if they are numbers)
      else {
        return sortDirection ? a[type] > b[type] ? -1 : 1 : a[type] > b[type] ? 1 : -1;
      }
    });
    // Flip the sorting (sorting is intentionally unset when initialised so that the data
    // is ordered "naturally"
    sortDirection === undefined ? setSortDirection(true) : setSortDirection(!sortDirection);
    update(data);
  };

  return (
    <button type="button" onClick={() => handleSort(name)}>
      {camelToSentenceCase(name)}
    </button>
  )
}

export default SortButton;
