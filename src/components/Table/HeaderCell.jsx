const HeaderCell = (props) => {
  return (
    <th scope={props.scope}>
      {props.children}
    </th>
  )
};

export default HeaderCell;
