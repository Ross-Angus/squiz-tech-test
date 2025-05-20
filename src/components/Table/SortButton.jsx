import classes from './sortbutton.module.css';
import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';

const SortButton = ({ name, tableData, update, sortDirection, setSortDirection, sortTerm, setSortTerm }) => {

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
    setSortTerm(type);
    update(data);
  };

  // For ensuring that the table has either no class, or a class which
  // reflects the sorting direction
  const boolClass = (name) => {
    if (sortDirection && name === sortTerm) {
      return classes.sortAscending;
    } else if (!sortDirection && name === sortTerm) {
      return classes.sortDescending;
    }
  }

  // Generates title text for the sort button
  const sortTitle = buttonName => {
    const direction = sortDirection ? 'descending' : 'ascending';
    if (sortDirection === undefined) {
      return `Sort ${buttonName} in ascending order`;
    } else {
      return `Sort ${buttonName} in ${direction} order`;
    }
  }

  return (
    <button type="button" onClick={() => handleSort(name)} className={`${classes.sortButton} ${boolClass(name)}`} title={sortTitle(camelToSentenceCase(name))}>
      {camelToSentenceCase(name)}
      <span>⇡</span>
    </button>
  )
}

export default SortButton;
