import { useState, useEffect } from 'react'
import './App.css'
import CacheData from './components/CacheData/CacheData.js';

function App() {
  const [clientList, setClientList] = useState({});
  // We only want to run `CacheData()` on first render
  useEffect(() => { CacheData(setClientList) }, []);

  return (
    <>
      <p>
        <textarea cols="20" rows="10" defaultValue={clientList}></textarea>
      </p>
    </>
  )
}

export default App
