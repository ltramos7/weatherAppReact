import React, { Component } from 'react'

export default class WeatherCard extends Component {
    
    getLocalTime = () => {
        let today = new Date(this.props.localWeather.dt*1000)
        // let today = new Date(Number(data.dt)*1000)
        console.log(today)
        let [month, day, year] = today.toLocaleDateString("en-US").split("/")
        let hour = today.getHours()
        let minute = today.getMinutes()
        console.log(month, day, year, hour, minute)
        
    }
    componentDidUpdate = () => {
        this.getLocalTime()
    }
    
    render() {
        // let today = new Date(Number(this.props.localWeather.dt)*1000)
        // let [month, day, year, hour] = today.toLocaleDateString("en-US").split("/")
        let localWeather = this.props.localWeather
        console.log(this.props.localWeather)
        
        return (
            <div id="local-weather-info-container">
                <h2 id="city-location">{localWeather.name}</h2>
                <p id="current-time" onChange={this.getLocalTime}>Time goes here</p>
                {/* <p id="current-time">as of {hour} - {month}/{day}/{year}</p> */}
                <p id="current-temp"></p>
                <p id="weather-description"></p>
                <p id="local-weather-info"></p>
            </div>
        )
    }
}
