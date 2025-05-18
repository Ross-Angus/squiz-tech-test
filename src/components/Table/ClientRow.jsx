import classes from './table.module.css';
import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';
import HeaderCell from './HeaderCell';
import DataCell from './DataCell';

// This is for rendering out a single snippet of JSON
const ClientRow = (props) => {
  const { rowData, sortTerm } = props;

  const cols = [];
  let count = 0;

  for (const key in rowData) {
    count === 0 ? cols.push(
      <HeaderCell scope="row" label={camelToSentenceCase(key)} key={count} className={sortTerm === key ? classes.selected : null}>{rowData[key]}</HeaderCell>
    ) : cols.push(
      <DataCell key={count} label={camelToSentenceCase(key)} className={sortTerm === key ? classes.selected : null}>{rowData[key]}</DataCell>
    );
    count += 1;
  }

  return (
    <tr>
      {cols}
    </tr>
  )
};

export default ClientRow;
