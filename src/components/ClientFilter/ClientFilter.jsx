import { useState, useEffect } from 'react';
import { getUniqueValues, getClientsByNameAndValue } from '../../utils/array-utils/array-utils.js';
import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';
import objectKeyToArray from '../../utils/object-key-to-array/object-key-to-array.js';
import Thead from '../Table/Thead.jsx';
import Tbody from '../Table/Tbody.jsx';
import Row from '../Table/Row.jsx';
import ClientRow from '../Table/ClientRow.jsx';
import HeaderCell from '../Table/HeaderCell.jsx';

const ClientFilter = ({data}) => {

  const [ filterResults, setFilterResults ] = useState([]);
  const [ industryList, setIndustryList ] = useState([]);
  const [ countryList, setCountryList ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState([]);
  const headerRow = objectKeyToArray(data[0]);

  // We only need to run this once
  useEffect(() => {
    setIndustryList(getUniqueValues(data, 'industry'));
    setCountryList(getUniqueValues(data, 'country'));
  }, [data]);

  const handleClick = (dataType, dataValue) => {
    setSearchTerm([dataType, dataValue]);
    const results = getClientsByNameAndValue(data, dataType, dataValue);
    setFilterResults(results);
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

      {filterResults.length > 0 && (
        <table>
          <caption>Clients with a <var>{searchTerm[0]}</var> matching <var>{searchTerm[1]}</var></caption>
          <Thead>
            <Row>
              {headerRow.map(name => {
                return (
                  <HeaderCell key={name} scope="col">{camelToSentenceCase(name)}</HeaderCell>
                )
              })}
            </Row>
          </Thead>
          <Tbody>
            {filterResults.map(client => (
              <ClientRow rowData={client} key={client.id}/>
            ))}
          </Tbody>
        </table>
      )}

    </form>
  )
};

export default ClientFilter;
