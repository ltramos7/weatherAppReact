import React, { Component } from 'react'

export default class WeatherCard extends Component {

   
    
    getLocalTime = (time) => {
        // let today = new Date(this.props.localWeather.dt*1000)
        let today = new Date(time*1000)
        let [month, day, year] = today.toLocaleDateString("en-US").split("/")
        let hour = today.getHours()
        let minute = today.getMinutes()
        console.log(month, day, year, hour, minute)
        
    }
    componentDidUpdate = () => {
        this.getLocalTime(this.props.localWeather.dt)
    }
    
    render() {
        let localWeather = this.props.localWeather
        
        return (
            <div id="local-weather-info-container">
                <h2 id="city-location">{localWeather.name}</h2>
                <p id="current-time">Time goes here</p>
                {/* <p id="current-time">as of {hour} - {month}/{day}/{year}</p> */}
                <p id="current-temp"></p>
                <p id="weather-description"></p>
                <p id="local-weather-info"></p>
            </div>
        )
    }
}
