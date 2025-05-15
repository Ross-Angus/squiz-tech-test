import { useState, useEffect } from 'react'
import './App.css'
import CONSTANTS from './global/constants.json';
import objectKeyToArray from './utils/object-key-to-array/object-key-to-array.js';
import CacheData from './components/CacheData/CacheData.js';
import Table from './components/Table/Table.jsx';
import Thead from './components/Table/Thead.jsx';
import Row from './components/Table/Row.jsx';
import HeaderCell from './components/Table/HeaderCell.jsx';
import DataCell from './components/Table/DataCell.jsx';
import SortButton from './components/Table/SortButton.jsx';

function App() {
  const [clientList, setClientList] = useState();
  // We only want to run `CacheData()` on first render
  useEffect(() => { CacheData(setClientList) }, []);

  let keyArray = [];
  if (clientList) {
    keyArray = objectKeyToArray(clientList[0]);
  }
  // <SortButton name={name}/>

  return (
    <>
      {clientList ? (
        <>
          <h1>Ross</h1>
          <Table caption={CONSTANTS.DATA_NAME}>
            <Thead>
              <Row>
                {keyArray.map(name => {
                  console.log(name);
                  return (
                    <HeaderCell key={name}>
                      <SortButton name={name}/>
                    </HeaderCell>
                  )
                })}
              </Row>
            </Thead>
          </Table>
        </>
      ) : "Loading"}
    </>
  )
}

export default App
