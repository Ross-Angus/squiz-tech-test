import '../../styles/components/card.css';
import classes from './random-stat.module.css';

const RandomStat = ({ data }) => {

  // Returns a random number between zero and i and rounds it to a whole number
  const rn = (i = 1) => ~~(Math.random()*i);

  const randData = data[rn(data.length)];
  console.log(randData);

  return (
    <aside aria-label={randData.name} className="card">
      <h2>{randData.name}</h2>
      <div class={classes.row}>
        <dl class={classes.stats}>
          <dt>Country of origin</dt>
          <dd className={classes.larger}>{randData.country}</dd>
        </dl>
        <dl class={classes.stats}>
          <dt>Industry</dt>
          <dd className={classes.large}>{randData.industry}</dd>
        </dl>
        <dl class={classes.stats}>
          <dt>Number of employees</dt>
          <dd className={classes.largest}>{randData.numberOfEmployees}</dd>
        </dl>
      </div>
    </aside>
  )
};

export default RandomStat;
