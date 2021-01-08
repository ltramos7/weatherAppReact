import React, { Component } from 'react'

export default class ButtonArea extends Component {
  
    render() {
        return (
            <div className="current-weather-btn">
                {/* <button onClick={() => {this.props.getLocalWeather(); this.props.getLocalTime();}}>Current Weather</button> */}
                {/* <button onClick={()=>{this.props.getCurrentWeather();this.props.toggleLoadingStatus();}}>Current Weather</button> */}
                <button onClick={this.props.getCurrentWeather}>Current Weather</button>
            </div>
        )
    }
}
