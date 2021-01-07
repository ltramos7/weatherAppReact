import React, { Component } from 'react'

export default class WeatherCard extends Component {
    //this.props.localWeatherInfo
    //this.props.localTime
    
    render() {
        console.log(this.props.localTime)
        return (
            <div id="local-weather-info-container">
                <h2 id="city-location">{this.props.localWeatherInfo.name}</h2>
                <p id="current-time">as of {this.props.localTime[3]}:{this.props.localTime[4]} - {this.props.localTime[0]}/{this.props.localTime[1]}/{this.props.localTime[2]}</p>
                <p id="current-temp"></p>
                <p id="weather-description"></p>
                <p id="local-weather-info"></p>
            </div>
        )
    }
}
