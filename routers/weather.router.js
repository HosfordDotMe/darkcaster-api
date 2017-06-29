const express = require('express');
const router = express.Router();
const axios = require('axios');
const darksky = require('../credentials').darksky;
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;


router.get('/weather', (request, response) => {
  //console.log(request);
  const url = `${baseUrl}37.8267,-122.4233`;
  axios.get(url)
    .then(weather => {
      response.json(weather.data);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get('/weather/:lat,:lon', (request, response) => {
  const lat = request.params.lat;
  const lon = request.params.lon;
  const url = `${baseUrl}${lat},${lon}`;

  axios.get(url)
    .then(weather => {
      response.json(weather.data);
    })
    .catch(err => {
      console.error(err.stack);
      response.status(404).send('Can\'t find that place');
  });
});
module.exports = router;
