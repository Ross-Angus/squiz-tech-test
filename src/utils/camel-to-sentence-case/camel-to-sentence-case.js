// This returns sentence case from a camelCase string
const camelToSentenceCase = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase())
  .trim();

export default camelToSentenceCase;
