import React, { Component } from 'react'
import style from './ButtonArea.module.css'

export default class ButtonArea extends Component {
  
    render() {
        return (
            <div className={style.currentWeatherBtn}>
                <button onClick={this.props.getCurrentWeather}>Current Weather</button>
            </div>
        )
    }
}
