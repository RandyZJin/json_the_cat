const request = require('request');

let dataStorage;
const logData = (data) => {
  dataStorage = JSON.parse(data);
  console.log(dataStorage[0].description);
};

const fetchBreed = (query) => {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    return new Promise((resolve, reject) => {
      if (!error) {
        resolve(logData(body));
      } else {
        reject("error:", error);
      }
    }
    );
  });
};

fetchBreed(process.argv[2]);





