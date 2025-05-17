import classes from './table.module.css';
import HeaderCell from './HeaderCell';
import DataCell from './DataCell';

// This is for rendering out a single snippet of JSON
const ClientRow = (props) => {
  const { rowData, sortTerm } = props;

  const cols = [];
  let count = 0;

  for (const key in rowData) {
    count === 0 ? cols.push(
      <HeaderCell scope="row" key={count} className={sortTerm === key ? classes.selected : null}>{rowData[key]}</HeaderCell>
    ) : cols.push(
      <DataCell key={count} className={sortTerm === key ? classes.selected : null}>{rowData[key]}</DataCell>
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
