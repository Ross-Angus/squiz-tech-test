const Table = (props) => {
  return (
    <table>
      <caption>{props.caption}</caption>
      {props.children}
    </table>
  )
};

export default Table;
