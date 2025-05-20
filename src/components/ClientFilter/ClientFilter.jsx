import { useState, useEffect } from 'react';
import { getUniqueValues } from '../../utils/array-utils/array-utils.js';

const ClientFilter = ({data}) => {

  const [ industryList, setIndustryList ] = useState([]);
  const [ countryList, setCountryList ] = useState([]);

  // We only need to run this once
  useEffect(() => {
    setIndustryList(getUniqueValues(data, 'industry'));
    setCountryList(getUniqueValues(data, 'country'));
  }, [data]);

  const handleClick = (dataType, dataValue) => {
    console.log(dataType, dataValue);
  };

  return (
    <form>

      <fieldset>
        <legend>Filter clients by industry:</legend>
        <p>
          {industryList.map(industry => (
            <button type="button" key={industry} onClick={() => {handleClick('industry', industry)}}>{industry}</button>
          ))}
        </p>
      </fieldset>

      <fieldset>
        <legend>Filter clients by country:</legend>
        <p>
          {countryList.map(country => (
            <button type="button" key={country} onClick={() => {handleClick('country', country)}}>{country}</button>
          ))}
        </p>
      </fieldset>
    </form>
  )
};

export default ClientFilter;
