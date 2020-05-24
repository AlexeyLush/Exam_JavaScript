import React, { Component } from 'react';

import './category.css';
import '../../css/all.min.css'
export default class Category extends Component {
    state = {
        title: 'Зд1312',
        icon: 'fas fa-hand-holding-medical',
        background: '',
    }
    render() {
        const { title, icon, background } = this.state;
        const className = `category-container ${background}`
        return (
            <div className={className} >
                <div className="category-title">{title}</div>
                <i class={icon}></i>
            </div >
        )
    }
}