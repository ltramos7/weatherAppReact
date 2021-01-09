
import React, { Component } from 'react'
import style from './Header.module.css'


export default class Header extends Component {
    render() {
        return (
            <div className={style.welcomeTitle}>
                <h1>'Tis My Weather App</h1>
            </div>
        )
    }
}

