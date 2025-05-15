import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';

const SortButton = ({name, tableData, update}) => {
  const handleSort = (type) => {
    const data = [...tableData].sort((a, b) => a[type].localeCompare(b[type]));
    update(data);
  };

  return (
    <button type="button" onClick={() => handleSort(name)}>
      {camelToSentenceCase(name)}
    </button>
  )
}

export default SortButton;
