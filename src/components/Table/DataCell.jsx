const DataCell = (props) => {
  return (
    <td className={props.className}>
      {props.children}
    </td>
  )
};

export default DataCell;
