import { useState, useEffect } from 'react'
import './styles/App.css'
import CONSTANTS from './global/constants.json';
import objectKeyToArray from './utils/object-key-to-array/object-key-to-array.js';
import CacheData from './components/CacheData/CacheData.js';
import Table from './components/Table/Table.jsx';
import CompareData from './components/CompareData/CompareData.jsx';
import RandomStat from './components/RandomStat/RandomStat.jsx';

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
          <RandomStat data={clientList}/>
          <CompareData data={clientList} types={keyArray}/>
          <Table caption={CONSTANTS.DATA_NAME} headerRow={keyArray} clientList={clientList} setClientList={setClientList}/>
        </>
      ) : "Loading"}
    </>
  )
}

export default App
