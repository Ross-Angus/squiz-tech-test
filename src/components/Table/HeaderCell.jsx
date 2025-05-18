const HeaderCell = (props) => {
  const label = props.label;

  return (
    <th scope={props.scope} className={props.className} data-label={label}>
      {props.children}
    </th>
  )
};

export default HeaderCell;
