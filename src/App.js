import React, { Component } from 'react'

import Header from './components/Header'
import ButtonArea from './components/ButtonArea'
import WeatherCard from './components/WeatherCard'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      latitude: "",
      longitude:""
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
    console.log("fetch location info function:", latitude, longitude)
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=aa662ed0d71b09fd88e5880bc7bf3617`)
    .then(resp => resp.json() )
    .then(data => console.log(data))
    // .then(data => renderLocationInfo(data))
  }

  render() {
    console.log("long: ", this.state.longitude, "lat: ", this.state.latitude)
    return (
      <div>
        <Header/>
        <ButtonArea getLocalWeather={this.getLocalWeather}/>
        <WeatherCard/>
      </div>
    )
  }
}


