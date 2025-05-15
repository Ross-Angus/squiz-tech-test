import camelToSentenceCase from '../camel-to-sentence-case/camel-to-sentence-case.js';

// This is passed an object and returns an Array of the `name` values. For example,
// this object:

// {
//    "key-name": 1,
//    "another-key-name": 2
// }

// ... would return the following Array:

// ["key-name", "another-key-name"]

const objectKeyToArray = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(camelToSentenceCase(key));
  }
  return arr;
};

export default objectKeyToArray;
