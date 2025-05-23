import CONSTANTS from '../../global/constants.json';

// This component attempts to fetch a copy of the data from the user's local storage.
// then checks the remote URL, to see if it needs updating. This way, the application
// can work offline and is not subject to the whims of server infrastructure

const CacheData = (update) => {
  const localDataString = localStorage.getItem("cachedData");
  const localData = JSON.parse(localDataString);
  const cacheTime = localStorage.getItem("cacheTime");
  // If the cached copy is older than this number of DAYS, a new version of the data
  // will be fetched
  const maxAge = 1;

  const fetchData = () => {
    fetch(CONSTANTS.DATA_URI)
      .then(response => {
        // If the remote server is not responding correctly, pretend it has and return
        // the old data instead. The user will never know (unless they visit for
        // the first time and the servers are down)
        if (!response.ok) {
          return localData;
        } else {
          return response.json()
        }
      })
      .then(array => {
        // Adding a last downloaded date
        update(array);
        localStorage.setItem("cachedData", JSON.stringify(array));
        localStorage.setItem("cacheTime", Date.now());
    });
  };

  // Valid data found locally
  if (localDataString && cacheTime) {
    // Is it old enough to warrant a fresh copy?
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const cacheAge = Date.now() - cacheTime;
    // Cached data is older than the specified maximum age
    (maxAge * millisecondsInDay) < cacheAge ? fetchData() : update(localData);
  }
  // User is new here
  else fetchData();
};

export default CacheData;
