import React, { Component } from 'react'
import style from './WeatherCard.module.css'

export default class WeatherCard extends Component {
    
    render() {
        let icon = this.props.localWeatherInfo.weather[0].icon
        return (
            <div className={style.localWeatherInfoContainer}>
                <div className={style.weatherInfoContent}>
                    <h2 id="city-location">{this.props.localWeatherInfo.name} Weather</h2>
                    <p id="current-time">as of {this.props.localTime[0]}/{this.props.localTime[1]}/{this.props.localTime[2]} at {this.props.localTime[3]}:{this.props.localTime[4]}</p>
                    <p id="current-temp">Currently {Math.round(this.props.localWeatherInfo.main.temp)}° F and feels like {Math.round(this.props.localWeatherInfo.main.feels_like)}° F</p>
                    <p id="local-weather-info">Hi: {Math.round(this.props.localWeatherInfo.main.temp_max)}° F / Low: {Math.round(this.props.localWeatherInfo.main.temp_min)}° F</p>
                </div>
                <div className={style.weatherIcon}>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    <p id="weather-description">{this.props.localWeatherInfo.weather[0].description}</p>
                </div>
            </div>
        )
    }
}
