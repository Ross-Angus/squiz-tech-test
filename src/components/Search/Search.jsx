import { useState } from 'react';
import '../../styles/forms/inputs.css';
import ClientInfo from '../ClientInfo/ClientInfo.jsx';

const Search = ({data}) => {

  const [ clientData, setClientData ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ formError, setFormError ] = useState(false);
  const [ formErrorMessage, setFormErrorMessage ] = useState([(<>There has been an error</>)]);

  // This is an Array of class names for the colour variations of the card component.
  // Luckily, there are no more than two possible results, but how this Array is used
  // would need to be revisited if this changes.
  const altCards = ['card--progress', 'card--primary', 'card--complete'];

  // This generates out the `option` tags which are required for the `datalist` element
  // to work correctly
  const clientNames = data => data.map((client) => <option key={client.id}>{client.name}</option>);

  // The user has submitted a search
  const handleSubmit = (formData) => {
    setClientData([]);
    const searchString = formData.get("q");
    // It's "results" rather than "result" because some clients appear in the data
    // more than once.
    const results = [];

    data.map(client => {
      if (client.name === searchString) results.push(client);
    });

    // We have one or more search results
    if (results.length > 0) {
      setClientData(results);
      setFormError(false);
    } else {
      setFormError(true);
      setFormErrorMessage([(
        <>Your client <var>{searchTerm}</var> was not found. Please select a client from the autocomplete list.</>
      )]);
    }
  };

  // The user has updated the input with text
  const handleUpdate = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form action={handleSubmit}>
      <p>
        <label htmlFor="client-search">Search clients by name</label>
        {' '}
        <input
          id="client-search"
          list="client-names"
          name="q"
          onChange={handleUpdate}
          placeholder="Please start to type a client name"
          type="search"
          value={searchTerm}
        />
        <input type="submit" value="Search"/>
        <datalist id="client-names">
          {clientNames(data)}
        </datalist>
      </p>

      {clientData.length > 0 && (<h2>Search results:</h2>)}

      {clientData.map((client, index) => (
        <ClientInfo key={client.id} clientData={client} colourClass={altCards[index]}/>
      ))}

      {formError && (
        <footer className="card card--warning">
          {formErrorMessage.map((message, index) => <p key={index}>{message}</p>)}
        </footer>
      )}
    </form>
  )
};

export default Search;
