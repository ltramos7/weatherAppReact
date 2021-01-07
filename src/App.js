import React, { Component } from 'react'

import Header from './components/Header'
import ButtonArea from './components/ButtonArea'
import WeatherCard from './components/WeatherCard'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      latitude: "",
      longitude:"",
      localWeatherInfo: {},
      localTime: [],
      status: false
    }
  }

  getCurrentWeather = () => {

    const successCallback = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    this.setState({
      latitude: latitude,
      longitude: longitude
    })
    this.fetchLocationWeather(this.state.latitude, this.state.longitude)
    }
    
    const errorCallback = () => {
      console.log("Unable to retrieve your location.")
    }
    
    if(!navigator.geolocation){
      console.log("Geolocation is not supported by your browswer.");
    } else {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }
  }

  fetchLocationWeather = (latitude, longitude) => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=aa662ed0d71b09fd88e5880bc7bf3617`)
    .then(resp => resp.json() )
    .then(data => {
      this.setState({
        localWeatherInfo: data,
        localTime: data.dt
      })
      this.getLocalTime(data.dt)
    })
  }

  getLocalTime = (time) => {
    let today = new Date(time*1000)
    let [month, day, year] = today.toLocaleDateString("en-US").split("/")
    let hour = today.getHours()
    let minute = today.getMinutes()

    this.setState({
      localTime: [month, day, year, hour, minute],
      status: true
    })
  }

  render() {
    console.log("local time: ", this.state.localTime)
    return (
      <div>
        <Header/>
        <ButtonArea getCurrentWeather={this.getCurrentWeather} getLocalTime={this.getLocalTime} localTime={this.state.localTime}/>
        {this.state.status ? <WeatherCard localWeatherInfo={this.state.localWeatherInfo} localTime={this.state.localTime}/> : null}
      </div>
    )
  }
}


