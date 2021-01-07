import React, { Component } from 'react'

export default class WeatherCard extends Component {
    // this.props.localWeatherInfo
    // this.props.localTime

    // this.props.localWeatherInfo.main.temp
    // this.props.localWeatherInfo.main.feels_like
    // this.props.localWeatherInfo.main.temp_min
    // this.props.localWeatherInfo.main.temp_max
    // this.props.localWeatherInfo.weather[0].description

    
    render() {
        // console.log(this.props.localWeatherInfo.main.temp)
            

        console.log("main temp: ",this.props.localWeatherInfo.main.temp,
            "feels like: ",this.props.localWeatherInfo.main.feels_like,
            "min: ", this.props.localWeatherInfo.main.temp_min,
            "max: ", this.props.localWeatherInfo.main.temp_max,
            "des: ", this.props.localWeatherInfo.weather[0].description)
        return (
            <div id="local-weather-info-container">
                <h2 id="city-location">{this.props.localWeatherInfo.name} Weather</h2>
                <p id="current-time">as of {this.props.localTime[0]}/{this.props.localTime[1]}/{this.props.localTime[2]} at {this.props.localTime[3]}:{this.props.localTime[4]}</p>
                <p id="current-temp">Currently {this.props.localWeatherInfo.main.temp}° and feels like {this.props.localWeatherInfo.main.feels_like}°</p>
                <p id="weather-description">{this.props.localWeatherInfo.weather[0].description}</p>
                <p id="local-weather-info">Hi: {this.props.localWeatherInfo.main.temp_max}° / Low: {this.props.localWeatherInfo.main.temp_min}°</p>
            </div>
        )
    }
}
