import React, { Component } from 'react';
import CategoriesList from '../categories-list';
import Header from '../header';
import './app.css';


export default class App extends Component {
    render() {
        if (localStorage.getItem('currentBalance') === null){
            localStorage.setItem('currentBalance', 0)
        }
        if (localStorage.getItem('monthAddBalance') === null){
            localStorage.setItem('monthAddBalance', 0)
        }
        if (localStorage.getItem('monthMinusBalance') === null){
            localStorage.setItem('monthMinusBalance', 0)
        }
        return (
            <div className="moneycontrol-app">
                <Header currentBalance={localStorage.getItem('currentBalance')} monthAddBalance={localStorage.getItem('monthAddBalance')} monthMinusBalance={localStorage.getItem('monthMinusBalance')} show={false}/>
                <CategoriesList />
            </div>
        );
    }
}