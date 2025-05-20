// This is passed an Array and an index and extracts all elements which
// appear at a specified index on Arrays nested within it.
export const getNestedArrayItem = (arr, index) => {
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
export const returnSumOfValues = (arr, term, termIndex, numIndex) => {
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
export const returnDuplicationLog = arr => {
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

// Checks an Array to see if it has any non-integer values. If it does,
// it returns `false`.
export const intCheck = array => {
  let result = true;
  array.map(entry => {
    if (!Number.isInteger(entry)) result = false;
  })
  return result;
};

// Checks an Array to see if it has duplicate values
export const duplicateCheck = (array) => (new Set(array)).size !== array.length;

// This function is passed an Array and a term to search for. It loops
// through the Array and then looks for strings which match the term
// on the `name` property of the objects inside the Array. It only adds
// the `value` of the property if it does not already exist in the
// running total.
export const getUniqueValues = (data, term) => {
  const valuesArray = [];
  data.map(client => {
    const newValue = client[term];
    !valuesArray.includes(newValue) && valuesArray.push(newValue);
  });
  valuesArray.sort();
  return valuesArray;
}

// This is passed a data set, a name and a value. It `maps` through the
// Array and looks for a `name` and `value` property which matches the
// parameters. For each match, it saves the result and then returns an
// Array of results at the end.
export const getClientsByNameAndValue = (data, name, value) => {
  const result = [];
  data.map(client => {
    client[name] === value && result.push(client);
  });
  return result;
}
