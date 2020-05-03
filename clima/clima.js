const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=662b6e415c3b7a9f8720ca39249837e1&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}