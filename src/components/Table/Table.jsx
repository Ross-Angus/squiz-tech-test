import Thead from './Thead.jsx';
import Row from './Row.jsx';
import HeaderCell from './HeaderCell.jsx';
import DataCell from './DataCell.jsx';

const Table = (props) => {
  return (
    <table>
      <caption>{props.caption}</caption>
      {props.children}
    </table>
  )
};

export default Table;
