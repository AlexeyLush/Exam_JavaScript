import React, { Component } from 'react';
import Category from '../category';

import './app.css';

export default class App extends Component{
    render(){
        return(
            <div className="moneycontrol-app">
                <Category/>
            </div>
        );
    }
}