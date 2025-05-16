import { useState } from 'react'
import Thead from './Thead.jsx';
import Tbody from './Tbody.jsx';
import Row from './Row.jsx';
import ClientRow from './ClientRow.jsx';
import HeaderCell from './HeaderCell.jsx';
import SortButton from './SortButton.jsx';

const Table = ({ caption, headerRow, clientList, setClientList }) => {
  const [sortDirection, setSortDirection] = useState();

  // For ensuring that the table has either no class, or a class which
  // reflects the sorting direction
  const boolClass = (bool) => {
    if (bool === undefined) {
      return;
    } else if (bool === true) {
      return "sort-ascending";
    } else {
      return "sort-descending ";
    }
  }

  return (
    <table className={boolClass(sortDirection)}>
      <caption>{sortDirection} {caption}</caption>
      <Thead>
        <Row>
          {headerRow.map(name => {
            return (
              <HeaderCell key={name} scope="col">
                <SortButton name={name} tableData={clientList} update={setClientList} sortDirection={sortDirection} setSortDirection={setSortDirection}/>
              </HeaderCell>
            )
          })}
        </Row>
      </Thead>
      <Tbody>
        {clientList.map(client => (
          <ClientRow rowData={client} key={client.id}/>
        ))}
      </Tbody>
    </table>
  )
};

export default Table;
