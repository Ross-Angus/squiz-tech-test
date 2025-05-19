import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';

const ChooseType = ({ type, selectedTypes, setSelectedTypes }) => {

  // The Array `selectedTypes` should have no more than two items inside it,
  // representing the two different kinds of data we want to compare in the
  // doughnut chart. If the user clicks on a third type of data, it is
  // added to the last position, and the first element in the Array is
  // trimmed
  const handleType = (newType) => {
    const newTypes = selectedTypes;
    newTypes.push(newType);
    if (newTypes.length > 2) {
      const shortArray = newTypes.slice(1);
      setSelectedTypes(shortArray);
    } else {
      // The `newTypes` Array is deconstructed here to trigger a re-render,
      // so that the `disabled` attribute is correctly reflected in the UI.
      setSelectedTypes([...newTypes]);
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleType(type)}
      disabled={selectedTypes.includes(type)}
    >
      {camelToSentenceCase(type)}
    </button>
  )
};

export default ChooseType;
