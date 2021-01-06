import React, { Component } from 'react'

export default class ButtonArea extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.getLocalWeather}>Current Weather</button>
            </div>
        )
    }
}
