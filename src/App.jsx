import { useState, useEffect } from 'react'
import './App.css'
import CONSTANTS from './global/constants.json';
import objectKeyToArray from './utils/object-key-to-array/object-key-to-array.js';
import CacheData from './components/CacheData/CacheData.js';
import Table from './components/Table/Table.jsx';

function App() {
  const [clientList, setClientList] = useState();
  // We only want `CacheData()` to run on first render
  useEffect(() => { CacheData(setClientList) }, []);

  let keyArray = [];
  if (clientList) {
    keyArray = objectKeyToArray(clientList[0]);
  }

  return (
    <>
      {clientList ? (
        <>
          <Table caption={CONSTANTS.DATA_NAME} headerRow={keyArray} clientList={clientList} setClientList={setClientList}/>
        </>
      ) : "Loading"}
    </>
  )
}

export default App
