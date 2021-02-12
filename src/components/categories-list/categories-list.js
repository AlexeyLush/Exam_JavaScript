import React, { Component } from 'react';

import Category from '../category';
import AddBalanceButton from '../add-balance-btn';

import './categories-list.css';

export default class CategoryList extends Component {

    render() {
        if (localStorage.getItem('health') === null) {
            localStorage.setItem('health', 0)
        }
        if (localStorage.getItem('fitnes') === null) {
            localStorage.setItem('fitnes', 0)
        }
        if (localStorage.getItem('eat') === null) {
            localStorage.setItem('eat', 0)
        }
        if (localStorage.getItem('happy') === null) {
            localStorage.setItem('happy', 0)
        }
        if (localStorage.getItem('clothes') === null) {
            localStorage.setItem('clothes', 0)
        }
        if (localStorage.getItem('transport') === null) {
            localStorage.setItem('transport', 0)
        }
        if (localStorage.getItem('call') === null) {
            localStorage.setItem('call', 0)
        }
        if (localStorage.getItem('car') === null) {
            localStorage.setItem('car', 0)
        }
        if (localStorage.getItem('gadget') === null) {
            localStorage.setItem('gadget', 0)
        }
        return (
            <div className="categories-list">
                <div className="row">
                    <Category id="health" title="Здоровье" icon="fas fa-hand-holding-medical" background="red" />
                    <Category id="fitnes" title="Фитнес" icon="fas fa-swimmer" background="#66D9E8" />
                    <Category id="eat" title="Еда" icon="fas fa-drumstick-bite" background="orange" />
                </div>
                <div className="row">
                    <Category id="happy" title="Развлечение" icon="fas fa-cocktail" background="#20c9cd" />
                    <Category id="clothes" title="Одежда" icon="fas fa-tshirt" background="#20f532" />
                    <Category id="transport" title="Транспорт" icon="fas fa-bus-alt" background="#935963" />
                </div>
                <div className="row">
                    <Category id="call" title="Связь" icon="fas fa-mobile-alt" background="#512bbc" />
                    <Category id="car" title="Машина" icon="fas fa-car" background="#b14400" />
                    <Category id="gadget" title="Гаджеты" icon="fas fa-laptop" background="#262af8" />
                </div>
                <AddBalanceButton show={false}/>
            </div>
        )
    }
}