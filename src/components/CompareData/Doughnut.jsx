import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';
import classes from './compare-data.module.css';

const Doughnut = ({ data, selectedTypes }) => {

  // This will contain the CSS variables to generate the doughnut chart
  let styleObj = {
    "--value1": "5%",
    "--value2": "10%",
    "--value3": "15%",
    "--value4": "20%",
    "--value5": "25%",
    "--value6": "30%",
    "--value7": "35%",
    "--value8": "40%",
    "--value9": "45%",
    "--value10": "50%",
    "--value11": "55%",
    "--value12": "60%",
    "--value13": "65%",
    "--value14": "70%",
    "--value15": "75%",
    "--value16": "80%",
    "--value17": "85%",
    "--value18": "90%",
    "--value19": "95%",
    "--value20": "100%",
  };

  // Checks an Array to see if it has duplicate values
  const duplicateCheck = (array) => (new Set(array)).size !== array.length;

  // Checks an Array to see if it has any non-integer values. If it does,
  // it returns `false`.
  const intCheck = array => {
    let result = true;
    array.map(entry => {
      if (!Number.isInteger(entry)) result = false;
    })
    return result;
  };

  // This is passed an Array and an index and extracts all elements which
  // appear at a specified index on Arrays nested within it.
  const getNestedArrayItem = (arr, index) => {
    const result = [];
    arr.map(entry => {
      result.push(entry[index]);
    });
    return result;
  };

  // This is passed an Array of Arrays and a search string and an index. It loops
  // through the Array and for each nested Array, it checks to see if the `term`
  // matches the string at index `termIndex`. If this is true, it gets the number
  // at the `numIndex` and adds it to a running total.
  const returnSumOfValues = (arr, term, termIndex, numIndex) => {
    let total = 0;
    arr.map(nestedArr => {
      if (nestedArr[termIndex] === term) total += parseInt(nestedArr[numIndex]);
    });
    return total;
  };

  // This is passed an Array which contains duplicate string values and returns
  // a second Array which has the duplicates removed, but each element in the
  // new Array contains an Array with the number of duplications and the
  // original string.
  const returnDuplicationLog = arr => {
    const result = [];
    const completedStrings = [];
    arr.map(string => {
      result.map(item => {
        if (item[0] === string) item[1] += 1;
      });
      if (!completedStrings.includes(string)) result.push([string, 1]);
      completedStrings.push(string);
    });
    return result;
  }

  const generateStyleObj = arr => {
    // This will be the total of all the values being compared
    let total = 0;
    const styleObj2 = {};
    arr.map(entry => {
      total += entry[1];
    });
    // This is the smallest segment of the doughnut
    const unit = 100 * (1 / total);
    let percentTotal = 0;
    arr.map((item, index) => {
      const itemSize = item[1] * unit;
      percentTotal += itemSize;
      styleObj2[`--value${index + 1}`] = `${percentTotal}%`;
    });
    console.log(styleObj2);
  };

  // This attempts to split the data into a category which labels the
  // data and the value of the data
  const init = () => {
    const set0 = getNestedArrayItem(data, 0);
    const set1 = getNestedArrayItem(data, 1);
    const zeroHasNumber = intCheck(set0);
    const oneHasNumber = intCheck(set1);

    // We've found numeric data on one of the nested Arrays
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
      generateStyleObj(result);
    }

    // We've found duplicate string values in set 0
    else if (duplicateCheck(set0)) {
      generateStyleObj(returnDuplicationLog(set0));
    }

    // We've found duplicate string values in set 1
    else if (duplicateCheck(set1)) {
      generateStyleObj(returnDuplicationLog(set1));
    }

    else {
      // We can't do anything with this data
      console.log("I can't do anything with this data");
    }
  };

  init();

  return (
    <figure className={classes.pie}>
      <p style={{
    "--value1": "5%",
    "--value2": "10%",
    "--value3": "15%",
    "--value4": "20%",
    "--value5": "25%",
    "--value6": "30%",
    "--value7": "35%",
    "--value8": "40%",
    "--value9": "45%",
    "--value10": "50%",
    "--value11": "55%",
    "--value12": "60%",
    "--value13": "65%",
    "--value14": "70%",
    "--value15": "75%",
    "--value16": "80%",
    "--value17": "85%",
    "--value18": "90%",
    "--value19": "95%",
    "--value20": "100%",
  }}>Hullo</p>
      <section className={classes.key} aria-label="Key">
        {data.map((entry, index) => (
          <dl key={index}>
            <dt>{Object.keys(entry)}</dt>
            <dd>{entry[Object.keys(entry)]}</dd>
          </dl>
        ))}
      </section>
      <figcaption>Data comparison of {camelToSentenceCase(selectedTypes[0])} with {camelToSentenceCase(selectedTypes[1])}</figcaption>
    </figure>
  )
};

export default Doughnut;
