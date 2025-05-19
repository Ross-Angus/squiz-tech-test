import { useState, useEffect } from 'react';
import ChooseType from './ChooseType.jsx';
import Doughnut from './Doughnut.jsx';
import classes from './compare-data.module.css';

const CompareData = ({data, types}) => {
  const [ selectedTypes, setSelectedTypes ] = useState([]);

  // We need to update the selected data when the selected types updates
  useEffect(() => { selectedData() }, [selectedTypes]);

  // This is the subset of data based on the user's selections
  const selectedData = () => {
    const chartData = [];
    data.map(client => {
      let newName;
      let newValue;
      for (const key in client) {
        if (key === selectedTypes[0]) newName = client[key];
        if (key === selectedTypes[1]) newValue = client[key];
      }

      // Has the user chosen some data?
      if (newName !== undefined && newValue !== undefined) {
        chartData.push({ [newName]: newValue });
      }
    });
    return chartData;
  }

  const clearSelectedTypes = () => {
    setSelectedTypes([]);
  }

  return (
    <>
      <fieldset className={classes.pieChoice}>
        <legend>Select two data types to compare</legend>
        <p>
          <button type="button" onClick={clearSelectedTypes} title="Clear the data and start again">Clear types</button>
          {types.map(type => <ChooseType key={type} type={type} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}/>)}
        </p>
      </fieldset>
      {selectedTypes.length > 1 && (
        <Doughnut data={selectedData()} selectedTypes={selectedTypes}/>
      )}
    </>
  )
};

export default CompareData;
