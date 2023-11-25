// required modules
const request = require('request');

const inputText = process.argv[2];

if (!inputText) {
  console.log('Please provide a breed name.');
  process.exit();
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${inputText}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching data:', error.message);
    process.exit();
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found.');
    return;
  }

  if (response.statusCode !== 200) {
    console.log(data.message);
    process.exit();
  }

  for (let arrElem of data) {
    const objOfElem = arrElem;
    console.log(objOfElem.description);
  }

});