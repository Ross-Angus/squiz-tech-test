import '../../styles/components/card.css';
import classes from './client-info.module.css';

const ClientInfo = ({clientData, colourClass}) => (
  <aside aria-label={clientData.name} className={`card ${colourClass}`}>
    <h2>{clientData.name}</h2>
    <div className={classes.row}>
      <dl className={classes.stats}>
        <dt>Country of origin</dt>
        <dd className={classes.larger}>{clientData.country}</dd>
      </dl>
      <dl className={classes.stats}>
        <dt>Industry</dt>
        <dd className={classes.large}>{clientData.industry}</dd>
      </dl>
      <dl className={classes.stats}>
        <dt>Number of employees</dt>
        <dd className={classes.largest}>{clientData.numberOfEmployees}</dd>
      </dl>
    </div>
  </aside>
);

export default ClientInfo;
