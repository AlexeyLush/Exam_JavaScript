import React, { Component } from 'react';

import './category-localstorage.css';

export default class CategotyLocalStorage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title
        }
    }
    render() {
        const { id, title } = this.state;
        const categoryFromLocalStorage = parseFloat(localStorage.getItem(id));
        localStorage.setItem(id, 0);
        return (
            <tr>
                <td>{title}</td>
                <td>{categoryFromLocalStorage}</td>
            </tr>
        )
    }
}