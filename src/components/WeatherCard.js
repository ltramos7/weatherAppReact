import React, { Component } from 'react'

export default class WeatherCard extends Component {
    render() {
        let localWeather = this.props.localWeather
        console.log(this.props.localWeather)
        return (
            <div id="local-weather-info-container">
                <h2 id="city-location">{localWeather.name}</h2>
                <p id="current-time"></p>
                <p id="current-temp"></p>
                <p id="weather-description"></p>
                <p id="local-weather-info"></p>
            </div>
        )
    }
}
