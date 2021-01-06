import React, { Component } from 'react'

import Header from './components/Header'
import ButtonArea from './components/ButtonArea'
import WeatherCard from './components/WeatherCard'


export default class App extends Component {

  getLocalWeather = () => {
    console.log("getLocalWeather function reached")
  }

  render() {
    return (
      <div>
        <Header/>
        <ButtonArea getLocalWeather={this.getLocalWeather}/>
        <WeatherCard/>
      </div>
    )
  }
}


