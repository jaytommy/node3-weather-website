const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/5bd4f2c4aee60b8fda15645d7e117094/'+ lat + ','+ lon

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out. The high is predicted to be ' + body.daily.data[0].temperatureMax + ' degrees and the low will be ' + body.daily.data[0].temperatureMin + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast