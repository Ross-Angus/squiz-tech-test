import ClientInfo from '../ClientInfo/ClientInfo.jsx';

const RandomStat = ({ data }) => {

  // Returns a random number between zero and i and rounds it to a whole number
  const rn = (i = 1) => ~~(Math.random()*i);

  const randData = data[rn(data.length)];

  return (
    <>
      <h2>Random client statistic:</h2>
      <ClientInfo clientData={randData} colourClass=""/>
    </>
  )
};

export default RandomStat;
