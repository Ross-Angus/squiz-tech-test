import camelToSentenceCase from '../../utils/camel-to-sentence-case/camel-to-sentence-case.js';
import classes from './compare-data.module.css';

const Doughnut = ({ data, selectedTypes }) => {

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

  // This is passed an Array of objects and returns an Array which contains
  // just the keys
  const getKeys = array => {
    const result = [];
    array.map(entry => {
      // Gentle convert to number
      // I want to convert "123" to 123 but not "1 Castle Street" to 1
      const key = Object.keys(entry)[0];
      const numKey = parseInt(key);
      // Legitimate use of double equals - I want to check for equivalence
      // but not type equivalence.
      key == numKey ? result.push(numKey) : result.push(key);
    });
    return result;
  };

  // This is passed an Array of objects and returns an Array which contains
  // just the values
  const getValues = array => {
    const result = [];
    array.map(entry => {
      result.push(entry[Object.keys(entry)]);
    });
    return result;
  }

  // This is passed a string and searches through an Array of objects, looking
  // for that string on the `name` property of the object. Once a match has been
  // made, the value of the `name` property is stored in an Array which is returned
  // at the end.
  const findValuesInObject = (term, array) => {
    const result = [];
    array.map(obj => {
      const key = Object.keys(obj)[0];
      if (key === term) result.push(obj[key]);
    });
    return result;
  }

  // This is the same as above, but it looks for values and returns the name.
  const findNamesInObject = (term, array) => {
    const result = [];
    array.map(obj => {
      const key = Object.keys(obj)[0];
      const value = obj[key];
      if (value === term) result.push(key);
    });
    return result;
  }

  // This attempts to split the data into a category which labels the data and the value of the data
  const init = () => {
    const set1 = getKeys(data);
    const set2 = getValues(data);

    console.log("Bonk!",set1, intCheck(set1));

    // Are the keys numeric?
    if (intCheck(set1)) {
      console.log("Numbers detected1");
      const result = [];
      const checked = [];
      // This is always the other term from set1
      data.map((entry) => {
        const label = Object.keys(entry)[1];
        console.log(entry);
        // Only continue if we haven't calculated this label before
        // if (!checked.includes(label)) {
        //   const nameArray = findNamesInObject(label, data);
        //   result.push({ [label]: nameArray.reduce((newVal, currentVal) => newVal + currentVal)});
        //   checked.push(label);
        // }
      });
    }

    // Are the values numeric?
    if (intCheck(set2)) {
      const result = [];
      const checked = [];
      console.log("Numbers detected2");
      // This is always the other term from set1
      data.map((entry) => {
        const label = Object.keys(entry)[0];
        // Only continue if we haven't calculated this label before
        if (!checked.includes(label)) {
          const valueArray = findValuesInObject(label, data);
          result.push({ [label]: valueArray.reduce((newVal, currentVal) => newVal + currentVal)});
          checked.push(label);
        }
      });
    }
    // Do either of the sets of data have duplicate values?
    else if (duplicateCheck(set1) || duplicateCheck(set2)) {
      console.log("duplicate detected");
      // The number of duplicated values determines the size of the doughnut slice
      if (duplicateCheck(set1)) {
        set1.map(entry => {
          //console.log(`${entry} appears in the Array ${set1.filter(x => x === entry).length} times`);
        });
      } else {
        // set 2 sets the size
        set2.map(entry => {
          //console.log(`${entry} appears in the Array ${set2.filter(x => x === entry).length} times`);
        });
      }

    }

    else {
      // We can't do anything with this data
      console.log("I can't do anything with this data");
    }
    //console.log(set1, duplicateCheck(set1), set2, duplicateCheck(set2))
  };

  init();

  const styleObj = {
    "--value": "5%",
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
  }

  return (
    <figure className={classes.pie}>
      <p style={styleObj}>Hullo</p>
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
