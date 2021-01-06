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
      localWeather: {}
    }
  }

  getLocalWeather = () => {

    const successCallback = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      this.setState({
        latitude: latitude,
        longitude: longitude
      })
      // console.log("lat: ", latitude, "long: ", longitude);
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
        localWeather: data
      })
    })
  }

  render() {
    
    return (
      <div>
        <Header/>
        <ButtonArea getLocalWeather={this.getLocalWeather}/>
        <WeatherCard localWeather={this.state.localWeather}/>
      </div>
    )
  }
}


