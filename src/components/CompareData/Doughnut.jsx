import { useState, useEffect } from 'react';
import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';
import { getNestedArrayItem, returnSumOfValues, returnDuplicationLog, intCheck, duplicateCheck } from '../../utils/array-utils/array-utils.js';
import classes from './compare-data.module.css';

const Doughnut = ({ data, selectedTypes }) => {

  // This Array represents the result of the user's filter choices
  const [ chartData, setChartData ] = useState([]);
  // This will contain the CSS variables to generate the doughnut chart
  const [ styleObject, setStyleObject ] = useState({});

  const generateStyleObj = arr => {
    // This will be the total of all the values being compared
    let total = 0;
    const obj = {};
    arr.map(entry => {
      total += entry[1];
    });
    // This is the smallest segment of the doughnut
    const unit = 100 * (1 / total);
    let percentTotal = 0;
    arr.map((item, index) => {
      const itemSize = item[1] * unit;
      percentTotal += itemSize;
      obj[`--value${index + 1}`] = `${percentTotal}%`;
    });
    setStyleObject(obj);
  };

  // This attempts to split the data into two categories: something
  // which can be counted and something which acts as a label
  const generateChartData = () => {
    const set0 = getNestedArrayItem(data, 0);
    const set1 = getNestedArrayItem(data, 1);
    const zeroHasNumber = intCheck(set0);
    const oneHasNumber = intCheck(set1);

    // We've found numeric data in one of the nested Arrays
    if (zeroHasNumber || oneHasNumber) {
      let a, b;
      if (zeroHasNumber) {
        a = 1;
        b = 0;
      } else {
        a = 0;
        b = 1;
      }
      const result = [];
      const checked = [];
      data.map((entry) => {
        // This is the text which labels the data
        const label = entry[a];
        // Only continue if we haven't calculated this label before
        if (!checked.includes(label)) {
          const setValues = returnSumOfValues(data, label, a, b);
          result.push([label, setValues]);
          checked.push(label);
        }
      });
      result.sort((a, b) => b[1] - a[1]);
      setChartData(result);
    }

    // This needs to change the key
    // We've found duplicate string values in set 0
    else if (duplicateCheck(set0)) {
      const result = returnDuplicationLog(set0);
      result.sort((a, b) => b[1] - a[1]);
      setChartData(result);
    }

    // We've found duplicate string values in set 1
    else if (duplicateCheck(set1)) {
      const result = returnDuplicationLog(set1);
      result.sort((a, b) => b[1] - a[1]);
      setChartData(result);
    }

    else {
      // We can't do anything with this data
      console.log("I can't do anything with this data");
    }
  };

  useEffect(() => { generateChartData() }, [selectedTypes]);
  useEffect(() => { generateStyleObj(chartData) }, [chartData]);

  return (
    <figure className={`${classes.pie} card card--progress`}>
      <figcaption>Data comparison of {camelToSentenceCase(selectedTypes[0])} with {camelToSentenceCase(selectedTypes[1])}</figcaption>
      <p style={styleObject}>{`${camelToSentenceCase(selectedTypes[0])} by ${camelToSentenceCase(selectedTypes[1])}`}</p>
      <section className={classes.key} aria-label={`${camelToSentenceCase(selectedTypes[0])} by ${camelToSentenceCase(selectedTypes[1])}`}>
        {chartData.map((entry, index) => (
          <dl key={index}>
            <dt><strong>{entry[1]}</strong></dt>
            <dd>{entry[0]}</dd>
          </dl>
        ))}
      </section>
    </figure>
  )
};

export default Doughnut;
