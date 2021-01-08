
import React, { Component } from 'react'
import style from './Header.module.css'


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className={style.welcomeTitle}>Welcome To WeatherApp!</h1>
                
            </div>
        )
    }
}

