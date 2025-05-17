import { useState } from 'react'
import classes from './table.module.css';
import Thead from './Thead.jsx';
import Tbody from './Tbody.jsx';
import Row from './Row.jsx';
import ClientRow from './ClientRow.jsx';
import HeaderCell from './HeaderCell.jsx';
import SortButton from './SortButton.jsx';

const Table = ({ caption, headerRow, clientList, setClientList }) => {
  const [sortDirection, setSortDirection] = useState();
  const [sortTerm, setSortTerm] = useState('');

  // For ensuring that the table has either no class, or a class which
  // reflects the sorting direction
  const boolClass = (bool) => {
    if (bool === undefined) {
      return;
    } else if (bool === true) {
      return classes.sortAscending;
    } else {
      return classes.sortDescending;
    }
  }

  return (
    <table className={boolClass(sortDirection)}>
      <caption>{caption}</caption>
      <Thead>
        <Row>
          {headerRow.map(name => {
            return (
              <HeaderCell key={name} scope="col" className={sortTerm === name ? classes.selected: null}>
                <SortButton name={name} tableData={clientList} update={setClientList} sortDirection={sortDirection} setSortDirection={setSortDirection} setSortTerm={setSortTerm}/>
              </HeaderCell>
            )
          })}
        </Row>
      </Thead>
      <Tbody>
        {clientList.map(client => (
          <ClientRow rowData={client} key={client.id} sortTerm={sortTerm}/>
        ))}
      </Tbody>
    </table>
  )
};

export default Table;
