// required modules
const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response,body) => {

    if (error) {
      return error.message;
      //console.error('Error fetching data:', error.message);
      
      //process.exit();
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      const emptyDesc = 'Breed not found.';
      callback(emptyDesc, null);
    }
  
    if (response.statusCode !== 200) {
      const statResp = data.message;
      callback(statResp, null);
    }
  
    for (let arrElem of data) {
      const objOfElem = arrElem;
      const desc = objOfElem.description;
      callback(null ,desc);
    }
  
  });





};
module.exports = { fetchBreedDescription };







