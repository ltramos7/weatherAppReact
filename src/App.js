import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header'
import ButtonArea from './components/ButtonArea/ButtonArea'
import WeatherCard from './components/WeatherCard/WeatherCard'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      localWeatherInfo: {},
      localTime: [],
      weatherCardStatus: false,
      loadingStatus: true
    }
  }

  getCurrentWeather = () => {

    const successCallback = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

   
    this.fetchLocationWeather(latitude, longitude)
    }
    
    const errorCallback = () => {
      alert("Unable to retrieve your location.")
    }
    
    if(!navigator.geolocation){
      alert("Geolocation is not supported by your browswer.");
    } else {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }
  }

  fetchLocationWeather = (latitude, longitude) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=aa662ed0d71b09fd88e5880bc7bf3617`)
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
      weatherCardStatus: true
    })
  }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <ButtonArea getCurrentWeather={this.getCurrentWeather} getLocalTime={this.getLocalTime} localTime={this.state.localTime} />
        {this.state.weatherCardStatus ? <WeatherCard localWeatherInfo={this.state.localWeatherInfo} localTime={this.state.localTime} />  : null}
      </div>
    )
  }
}


