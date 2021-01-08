import React, { Component } from 'react'
import './WeatherCard.css'

export default class WeatherCard extends Component {
    
    render() {
           
        // console.log("main temp: ",this.props.localWeatherInfo.main.temp,
        //     "feels like: ",this.props.localWeatherInfo.main.feels_like,
        //     "min: ", this.props.localWeatherInfo.main.temp_min,
        //     "max: ", this.props.localWeatherInfo.main.temp_max,
        //     "des: ", this.props.localWeatherInfo.weather[0].description)
        return (
            <div className="local-weather-info-container">
                <h2 id="city-location">{this.props.localWeatherInfo.name} Weather</h2>
                <p id="current-time">as of {this.props.localTime[0]}/{this.props.localTime[1]}/{this.props.localTime[2]} at {this.props.localTime[3]}:{this.props.localTime[4]}</p>
                <p id="current-temp">Currently {this.props.localWeatherInfo.main.temp}° F and feels like {this.props.localWeatherInfo.main.feels_like}° F</p>
                <p id="weather-description">{this.props.localWeatherInfo.weather[0].description}</p>
                <p id="local-weather-info">Hi: {this.props.localWeatherInfo.main.temp_max}° / Low: {this.props.localWeatherInfo.main.temp_min}°</p>
            </div>
        )
    }
}
