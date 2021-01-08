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
      weatherCardStatus: true
    })
  }

  // resetLoadingStatus = () => {
  //   console.log("resetLoadingStatus function reached")
  //   this.setState({
  //     loadingStatus: false
  //   })

  // }


  // place toggleLoadingStatus in componendDidUpdate() with a conditional statement
  toggleLoadingStatus = () =>{
    console.log(!this.state.loadingStatus)
    // this.setState({
    //   loadingStatus: !this.state.loadingStatus
    // })
    
  }

  render() {
    console.log("loading Status: ", this.state.loadingStatus)
    return (
      <div className="App">
        <Header/>
        <ButtonArea getCurrentWeather={this.getCurrentWeather} getLocalTime={this.getLocalTime} localTime={this.state.localTime} toggleLoadingStatus={this.toggleLoadingStatus}/>
        {/* {this.state.loadingStatus ? <p>Loading...</p> : null}  */}
        {this.state.weatherCardStatus ? <WeatherCard localWeatherInfo={this.state.localWeatherInfo} localTime={this.state.localTime} toggleLoadingStatus={this.toggleLoadingStatus()}/>  : null}
      </div>
    )
  }
}


