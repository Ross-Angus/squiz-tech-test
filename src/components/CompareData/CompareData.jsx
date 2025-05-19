import { useState } from 'react';
import classes from './compare-data.module.css';
import ChooseType from './ChooseType.jsx';

const CompareData = ({data, types}) => {
  const [ selectedTypes, setSelectedTypes ] = useState([]);

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
        <figure className={classes.pie}>
          <p>&nbsp;</p>
            <figcaption>Data comparison of {selectedTypes[0]} with {selectedTypes[1]}</figcaption>
        </figure>
      )}
    </>
  )
};

export default CompareData;
