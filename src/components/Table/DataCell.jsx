const DataCell = (props) => {
  const label = props.label;

  return (
    <td className={props.className} data-label={label}>
      {props.children}
    </td>
  )
};

export default DataCell;
