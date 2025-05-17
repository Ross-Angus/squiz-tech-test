const HeaderCell = (props) => {
  return (
    <th scope={props.scope} className={props.className}>
      {props.children}
    </th>
  )
};

export default HeaderCell;
