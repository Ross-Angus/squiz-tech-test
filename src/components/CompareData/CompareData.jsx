import { useState, useEffect } from 'react';
import ChooseType from './ChooseType.jsx';
import Doughnut from './Doughnut.jsx';
import classes from './compare-data.module.css';

const CompareData = ({data, types}) => {
  const [ selectedTypes, setSelectedTypes ] = useState([]);

  // We need to update the selected data when the selected types updates
  useEffect(() => { selectedData() }, [selectedTypes]);

  // This is the subset of data based on the user's selections. It's an
  // Array with each data point being a nested Array inside. This nested
  // Array has two elements, the first corresponds to the first data
  // type the user selected, and the second element is the second data
  // type.
  const selectedData = () => {
    const chartData = [];
    data.map(client => {
      let data1;
      let data2;
      for (const key in client) {
        if (key === selectedTypes[0]) data1 = client[key];
        if (key === selectedTypes[1]) data2 = client[key];
      }

      // Has the user chosen some data?
      data1 !== undefined && chartData.push([ data1, data2 ]);
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
      {selectedTypes.length > 0 && (
        <Doughnut data={selectedData()} selectedTypes={selectedTypes}/>
      )}
    </>
  )
};

export default CompareData;
